/*
 * This file is part of Hootenanny.
 *
 * Hootenanny is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * --------------------------------------------------------------------
 *
 * The following copyright notices are generated automatically. If you
 * have a new notice to add, please use the format:
 * " * @copyright Copyright ..."
 * This will properly maintain the copyright information. DigitalGlobe
 * copyrights will be updated automatically.
 *
 * @copyright Copyright (C) 2015, 2016 DigitalGlobe (http://www.digitalglobe.com/)
 */
package hoot.services.writers.osm;

import java.lang.reflect.InvocationTargetException;
import java.sql.Connection;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.apache.xpath.XPathAPI;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import org.w3c.dom.NamedNodeMap;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import com.mysema.query.sql.RelationalPathBase;
import com.mysema.query.sql.SQLExpressions;
import com.mysema.query.sql.SQLQuery;

import hoot.services.HootProperties;
import hoot.services.db.DbUtils;
import hoot.services.db.DbUtils.EntityChangeType;
import hoot.services.db.DbUtils.RecordBatchType;
import hoot.services.db2.CurrentNodes;
import hoot.services.db2.QCurrentRelationMembers;
import hoot.services.db2.QCurrentWayNodes;
import hoot.services.exceptions.osm.OSMAPIPreconditionException;
import hoot.services.geo.BoundingBox;
import hoot.services.models.osm.Changeset;
import hoot.services.models.osm.Element;
import hoot.services.models.osm.Element.ElementType;
import hoot.services.models.osm.ElementFactory;
import hoot.services.models.osm.XmlSerializable;
import hoot.services.utils.XmlDocumentBuilder;
import hoot.services.validators.osm.ChangesetErrorChecker;
import hoot.services.validators.osm.ChangesetUploadXmlValidator;


/**
 * Writes an uploaded changeset diff to the services database
 * <p>
 * This class and the model classes it references strive to make as many writes
 * to the database as possible as batch writes in order to cut down on round
 * trip calls to the database. For example, rather than execute a separate query
 * to insert way nodes for each way, way node records for a batch of ways are
 * kept in memory and written to the database in a batch, just after each
 * referenced way is written. This design does cause the code to be less
 * intuitive, unfortunately, but hopefully should result in increased write
 * performance.
 * <p>
 * //TODO: All element type specific db writing code should be made generic
 * again like it was before the jooq to querydsl conversion.
 */
public class ChangesetDbWriter {
    private static final Logger logger = LoggerFactory.getLogger(ChangesetDbWriter.class);

    private final Connection conn;

    private int maxRecordBatchSize = -1;
    private BoundingBox diffBounds; // bounds calculated from the diff request data
    private long requestChangesetId = -1;
    private Changeset changeset;
    private long requestChangesetMapId = -1;

    /*
     * A mapping of element IDs parsed from the request XML (key) to their
     * element object that contains their ID in the database, grouped by type
     * (effectively, a mapping of request specified (old) element ID to actual
     * element ID mapping); Elements being created don't have a permanent ID
     * (they're assigned a temporary negative ID by convention), so this allows
     * this element to know the ID of its related elements after they have been
     * processed earlier in the changeset upload parsing process. For existing
     * elements, both the key/value will always be the same.
     */
    private Map<ElementType, Map<Long, Element>> parsedElementIdsToElementsByType;

    // a collection of element records to be modified within the database
    private final List<Object> recordsToModify = new ArrayList<>();

    // IDs of the elements parsed from the request
    private final Set<Long> parsedElementIds = new LinkedHashSet<>();

    /*
     * a collection of related records (e.g. way nodes for ways, relations
     * members for relations, etc.) to be inserted into the database
     */
    private final List<Object> relatedRecordsToStore = new ArrayList<>();

    // temporary node cache of nodes referenced in the changeset request;
    // obtained from the database
    private Map<Long, CurrentNodes> dbNodeCache;


    public Map<ElementType, Map<Long, Element>> getParsedElementIdsToElementsByType() {
        return parsedElementIdsToElementsByType;
    }

    /**
     * Constructor
     *
     * @param conn
     *            JDBC Connection
     */
    public ChangesetDbWriter(Connection conn) {
        this.conn = conn;
        maxRecordBatchSize = Integer.parseInt(HootProperties.getPropertyOrDefault("maxRecordBatchSize"));
    }

    private void initParsedElementCache() {
        // create an empty ID mapping for each element type
        parsedElementIdsToElementsByType = new HashMap<>();
        for (ElementType elementType : ElementType.values()) {
            parsedElementIdsToElementsByType.put(elementType, new HashMap<Long, Element>());
        }
    }

    /*
     * Create/Modify requests cause the element ID to be incremented. Delete
     * requests cause it to be unchanged.
     */
    private static long getNewElementId(long oldElementId, long nextElementId, EntityChangeType entityChangeType,
            int elementCtr) {
        long newElementId = (entityChangeType == EntityChangeType.CREATE) ? (nextElementId + elementCtr) : oldElementId;
        return newElementId;
    }

    private long getOldElementId(NamedNodeMap nodeAttributes, EntityChangeType entityChangeType,
            List<Long> oldElementIds) throws Exception {
        long oldElementId = Long.parseLong(nodeAttributes.getNamedItem("id").getNodeValue());

        // make sure request has no duplicate IDs for new elements
        // This catches a duplicate create/delete error earlier. Technically,
        // updating the same node twice could be allowed (not sure if rails port does), but I'm
        // going to not allow that for now.
        if (oldElementIds.contains(oldElementId)) {
            throw new Exception("Duplicate OSM element ID: " + oldElementId + " in changeset " + requestChangesetId);
        }

        if (entityChangeType == EntityChangeType.CREATE) {
            // by convention, new element IDs should have a negative value
            if (oldElementId >= 0) {
                throw new Exception("Invalid OSM element ID for create: " + oldElementId + " for " + "changeset: "
                        + requestChangesetId + ".  Use a negative ID value.");
            }
        }

        // Formerly, we had a setting called
        // "hootCoreServicesDatabaseWriterCompatibility" that would
        // have to be turned on to allow nodes with negative ID's to be written,
        // which was to accomodate the behavior of hoot --convert. If it wasn't turned on, a failure
        // would occur here. Now, by default the writing nodes with negative ID's is always allowed.
        oldElementIds.add(oldElementId);

        return oldElementId;
    }

    /**
     * Parses and returns an OSM element from OSM changeset diff input XML data
     *
     * @param xml
     *            xml data to construct the elements from
     * @param oldId
     * @param newId
     * @param elementType
     *            type of elements being parsed
     * @param entityChangeType
     *            type of request database change to be performed on the
     *            elements
     * @return an element
     * @throws Exception
     */
    private Element parseElement(Node xml, long oldId, long newId, ElementType elementType,
            EntityChangeType entityChangeType) throws Exception {

        Element element = ElementFactory.create(requestChangesetMapId, elementType, conn);
        element.setId(newId);
        element.setOldId(oldId);
        element.setRequestChangesetId(requestChangesetId);
        element.setMapId(requestChangesetMapId);
        element.setEntityChangeType(entityChangeType);
        element.setDbNodeCache(dbNodeCache);

        // We pass the mappings for the previously parsed related element (child
        // element) IDs here (e.g. nodes for ways, relation members (nodes and ways) for
        // relations). Some elements have no related element type (e.g. Node), signified by a null response
        // from the getRelatedRecordTable method.
        if (element.getRelatedRecordTable() != null) {
            Map<ElementType, Map<Long, Element>> elementCache = new HashMap<>();
            for (ElementType relatedElementType : element.getRelatedElementTypes()) {
                elementCache.put(relatedElementType, parsedElementIdsToElementsByType.get(relatedElementType));
            }
            element.setElementCache(elementCache);
        }

        element.fromXml(xml);

        return element;
    }

    private long getNextElementId(ElementType elementType) throws InstantiationException, IllegalAccessException,
            ClassNotFoundException, NoSuchMethodException, InvocationTargetException {

        long nextElementId = new SQLQuery(conn, DbUtils.getConfiguration(requestChangesetMapId))
                .uniqueResult(SQLExpressions.nextval(Long.class, "current_" + elementType.toString().toLowerCase()
                        + "s_" + requestChangesetMapId + "_id_seq"));

        // This is a bigtime hack put in place b/c I was getting dupe
        // IDs...really needs to be fixed; I need to generate the IDs myself, rather than letting the db
        // do it automatically, so I have the new IDs to send back in the changeset upload
        // response...there might be a way to let the db auto-gen them and then return those, but I'm not sure
        // how that would work yet.
        Element prototypeElement = ElementFactory.create(requestChangesetMapId, elementType, conn);

        // THIS SHOULD NEVER HAPPEN!!
        boolean recordExistsWithSameId = new SQLQuery(conn, DbUtils.getConfiguration(requestChangesetMapId))
                .from(prototypeElement.getElementTable()).where(prototypeElement.getElementIdField().eq(nextElementId))
                .singleResult(prototypeElement.getElementTable()) != null;

        if (recordExistsWithSameId) {
            long highestElementId = new SQLQuery(conn, DbUtils.getConfiguration(requestChangesetMapId))
                    .from(prototypeElement.getElementTable()).orderBy(prototypeElement.getElementIdField().desc())
                    .singleResult(prototypeElement.getElementIdField());

            nextElementId = highestElementId + 1;
        }

        return nextElementId;
    }

    /**
     * Parses and returns a set of OSM elements from OSM changeset diff input
     * XML data
     *
     * @param xml
     *            xml data to construct the elements from
     * @param elementType
     *            type of elements being parsed
     * @param entityChangeType
     *            type of request database change to be performed on the
     *            elements
     * @param deleteIfUnused
     *            see description in writeDiff
     * @return collection of elements corresponding to the records to be updated
     * @throws Exception
     */
    private List<Element> parseElements(NodeList xml, ElementType elementType, EntityChangeType entityChangeType,
            boolean deleteIfUnused) throws Exception {
        logger.debug("Parsing elements...");

        long nextElementId = -1;

        // no need to get the next element ID from the database unless we are creating a new one
        if ((entityChangeType == EntityChangeType.CREATE) && (elementType != ElementType.Changeset)) {
            try {
                nextElementId = getNextElementId(elementType);
            }
            catch (Exception e) {
                throw new Exception("Error retrieving next new element ID for element type: " + elementType
                        + " for changeset: " + requestChangesetId + " (" + e.getMessage() + ")", e);
            }
        }

        List<Element> changesetDiffElements = new ArrayList<>();
        List<Long> oldElementIds = new ArrayList<>();
        for (int i = 0; i < xml.getLength(); i++) {
            Node xmlElement = xml.item(i);
            NamedNodeMap xmlAttributes = xmlElement.getAttributes();

            // calculate the previous and new IDs for the element
            long oldElementId = getOldElementId(xmlAttributes, entityChangeType, oldElementIds);
            long newElementId = getNewElementId(oldElementId, nextElementId, entityChangeType, i);

            Element element = parseElement(xmlElement, oldElementId, newElementId, elementType, entityChangeType);

            // Per OSM API docs:
            // "A <delete> block in the OsmChange document may have an if-unused
            // attribute (the value of which is ignored).
            // If this attribute is present, then the delete operation(s) in
            // this block are conditional and will only be executed if the object to be deleted is not used by another
            // object. Without the if-unused, such a situation would lead to an error, and the whole diff
            // upload would fail."
            if (entityChangeType == EntityChangeType.DELETE) {
                // We will always check whether the object to be deleted is
                // being used by other object(s), and could potentially cause a low level referential integrity DB
                // error, which we really don't want to propagate all the way up the user and rather wrap it
                // in something more user-friendly.
                try {
                    element.checkAndFailIfUsedByOtherObjects();
                }
                catch (OSMAPIPreconditionException e) {
                    if (deleteIfUnused) {
                        logger.info("Skipping DELETE since 'if-unused' is specified.  More details: {}", e.getMessage());
                        continue; // go to the next element
                    }
                    else {
                        throw e; // re-throw the error since 'if-unused' is not specified.
                    }
                }
            }

            // update the parsed element cache; this allows us to keep track of
            // the ID for each element passed in the request for later use, if the ID is different than
            // what the database ID ends up being (create requests)
            Map<Long, Element> idMappedElements = parsedElementIdsToElementsByType.get(elementType);
            idMappedElements.put(oldElementId, element);
            parsedElementIdsToElementsByType.put(elementType, idMappedElements);

            // add this to the records to be updated in the database
            recordsToModify.add(element.getRecord());

            // update the list of elements that will propagate to the changeset
            // response writer (doesn't contain child records, since those don't need to be written to the response)
            changesetDiffElements.add(element);
            parsedElementIds.add(newElementId);

            // Set related or child records (e.g. way nodes for a node, relation
            // members for a relation, etc.) that need to be updated *after* this element is inserted
            // into the db. The delete operation doesn't store these, because all related records will
            // automatically be deleted in writeDiff.
            if ((element.getRelatedRecords() != null) && (entityChangeType != EntityChangeType.DELETE)) {
                relatedRecordsToStore.addAll(element.getRelatedRecords());
            }

            if (diffBounds == null) {
                diffBounds = new BoundingBox(); // I think this is wrong
            }
            BoundingBox elementBounds = element.getBounds();

            // null check here if for relations that only contain members of
            // type relation, for which no bounds is being calculated
            if (elementBounds != null) {
                diffBounds.expand(element.getBounds(), Double
                        .parseDouble(HootProperties.getPropertyOrDefault("changesetBoundsExpansionFactorDeegrees")));
            }
        }

        oldElementIds.clear();

        return changesetDiffElements;
    }

    /**
     * Performs the OSM element database update portion for a changeset upload
     * request and returns the elements modified
     * <p>
     * Unlike OSM, we don't keep track of multiple versions of the same element.
     * <p>
     * OSM element udpate process
     * <p>
     * create = insert new modify = update existing + insert new
     * <p>
     * hoot element update process
     * <p>
     * create = insert new modify = update existing
     *
     * @param changesetId
     *            ID of the changeset being uploaded to
     * @param changesetDoc
     *            changeset contents
     * @return changeset upload response
     * @throws Exception
     */
    public Document write(long mapId, long changesetId, Document changesetDoc) throws Exception {
        logger.debug("Uploading data for changeset with ID: {} ...", changesetId);

        changeset = new Changeset(mapId, changesetId, conn);
        this.requestChangesetId = changeset.getId();
        changeset.verifyAvailability();

        if (changeset.requestChangesExceedMaxElementThreshold(changesetDoc)) {
            throw new Exception("Changeset maximum element threshold exceeded.");
        }

        requestChangesetMapId = mapId;

        Collection<XmlSerializable> changesetDiffElements = new ArrayList<>();
        changesetDiffElements.addAll(write(changesetDoc));

        return writeResponse(changesetId, (List<XmlSerializable>) changesetDiffElements);
    }

    /**
     * Performs the OSM element database update portion for a changeset upload
     * request and returns the elements modified
     * <p>
     * Unlike OSM, we don't keep track of multiple versions of the same element.
     * <p>
     * OSM element udpate process
     * <p>
     * create = insert new modify = update existing + insert new
     * <p>
     * hoot element update process
     * <p>
     * create = insert new modify = update existing
     *
     * @param changesetId
     *            ID of the changeset being uploaded to
     * @param changeset
     *            changeset contents
     * @return changeset upload response
     * @throws Exception
     */
    public Document write(long mapId, long changesetId, String changeset) throws Exception {
        Document changesetDoc;
        try {
            changesetDoc = (new ChangesetUploadXmlValidator()).parseAndValidate(changeset);
        }
        catch (Exception e) {
            throw new Exception("Error parsing changeset diff data: " + StringUtils.abbreviate(changeset, 100) + " ("
                    + e.getMessage() + ")", e);
        }

        return write(mapId, changesetId, changesetDoc);
    }

    private List<Element> write(Document changesetDoc) throws Exception {
        logger.debug(XmlDocumentBuilder.toString(changesetDoc));

        ChangesetErrorChecker changesetErrorChecker = new ChangesetErrorChecker(changesetDoc, requestChangesetMapId,
                conn);
        dbNodeCache = changesetErrorChecker.checkForElementExistenceErrors();
        changesetErrorChecker.checkForVersionErrors();
        changesetErrorChecker.checkForElementVisibilityErrors();

        initParsedElementCache();

        // The "if-unused" attribute in the delete tag prevents any element
        // being used by another element from being deleted (e.g. node can't be deleted that is still
        // being used by a way or relation, etc.); its attribute value is ignored; only the presence
        // of the attribute or lack thereof is looked at. This seems a little confusing to me,
        // but that's how the OSM rails port parses it, and I'm trying to stay consistent with
        // what it does when possible.
        logger.debug("Changeset delete unused check...");
        boolean deleteIfUnused = false;
        Node deleteXml = XPathAPI.selectSingleNode(changesetDoc, "//osmChange/delete");
        if ((deleteXml != null) && deleteXml.hasAttributes()
                && (deleteXml.getAttributes().getNamedItem("if-unused") != null)) {
            deleteIfUnused = true;
        }

        logger.debug("Inserting new OSM elements and updating existing OSM elements...");

        // By storing the elements and the element records in two different
        // collections, changesetDiffElements and recordsToStore, data is being duplicated
        // here since Element already has a copy of the UpdatableRecord. However, this prevents
        // having to parse through the records a second time to collect them to pass on to the database
        // with the batch method. This is wasteful of memory, so perhaps there is a better way to do this.
        List<Element> changesetDiffElements = new ArrayList<>();
        long changesetDiffElementsSize = 0;

        // Process on entity change type at a time, different database update
        // types must be batched separately (inserts/updates/deletes).
        for (EntityChangeType entityChangeType : EntityChangeType.values()) {
            // Process one element type at a time. For create/modify operations
            // we want to make sure elements that contain an element type are processed after that
            // element type (ways contain nodes, so process ways after nodes). This corresponds to the
            // default ordering of ElementType. For delete operations we want to go in the reverse order.
            List<ElementType> elementTypeValues = Arrays.asList(ElementType.values());

            if (entityChangeType == EntityChangeType.DELETE) {
                Collections.reverse(elementTypeValues);
            }

            for (ElementType elementType : elementTypeValues) {
                if (elementType != ElementType.Changeset) {
                    logger.debug("Parsing {} for {}", entityChangeType, elementType);

                    // parse the elements from the request XML for the given
                    // element type
                    changesetDiffElements.addAll(parseElements(
                            XPathAPI.selectNodeList(changesetDoc,
                                    "//osmChange/" + entityChangeType.toString().toLowerCase() + "/"
                                            + elementType.toString().toLowerCase()),
                            elementType, entityChangeType, deleteIfUnused));

                    // If any elements were actually parsed for this element and entity update type, update the
                    // database with the parsed elements, their related records, and their tags
                    if (changesetDiffElements.size() > changesetDiffElementsSize) {
                        changesetDiffElementsSize += (changesetDiffElements.size() - changesetDiffElementsSize);

                        assert (!recordsToModify.isEmpty());

                        // don't need to clear tags or related records out if
                        // this is a new element, since they won't exist yet
                        if (entityChangeType != EntityChangeType.CREATE) {
                            // Clear out *all* related elements (e.g. way nodes
                            // for node, relation members for relation, etc.) first (this is how the rails port
                            // does it, although while it seems necessary for ways, it doesn't seem necessary to
                            // me for relations). Any related elements to be created/retained specified in the
                            // request have already been added to relatedRecordsToStore and will be inserted into
                            // the db following this.
                            Element prototypeElement = ElementFactory.create(requestChangesetMapId,
                                    elementType, conn);

                            // Elements which don't have related elements, will return a null for the
                            // relatedRecordType.
                            RelationalPathBase<?> relatedRecordTable = prototypeElement.getRelatedRecordTable();
                            Element.removeRelatedRecords(requestChangesetMapId, relatedRecordTable,
                                    prototypeElement.getRelatedRecordJoinField(), parsedElementIds,
                                    relatedRecordTable != null, conn);
                        }

                        // TODO: really need to be flushing these batch
                        // executions after they get to be a certain
                        // size to avoid memory problems; see maxRecordBatchSize

                        // TODO: make this code element generic; reinstate the
                        // DbSerializable interface??
                        if (elementType == ElementType.Node) {
                            DbUtils.batchRecordsDirectNodes(requestChangesetMapId, recordsToModify,
                                    DbUtils.recordBatchTypeForEntityChangeType(entityChangeType), conn,
                                    maxRecordBatchSize);
                        }
                        else if (elementType == ElementType.Way) {
                            DbUtils.batchRecordsDirectWays(requestChangesetMapId, recordsToModify,
                                    DbUtils.recordBatchTypeForEntityChangeType(entityChangeType), conn,
                                    maxRecordBatchSize);
                        }
                        else if (elementType == ElementType.Relation) {
                            DbUtils.batchRecordsDirectRelations(requestChangesetMapId, recordsToModify,
                                    DbUtils.recordBatchTypeForEntityChangeType(entityChangeType), conn,
                                    maxRecordBatchSize);
                        }

                        // make the database updates for the element records
                        recordsToModify.clear();
                        parsedElementIds.clear();

                        // Add the related records after the parent element records to keep from violating
                        // foreign key constraints. Any existing related records
                        // for this element have already been completely cleared.
                        // TODO: make this code element generic; reinstate the
                        // DbSerializable interface??
                        if ((relatedRecordsToStore != null) && (!relatedRecordsToStore.isEmpty())) {
                            if (elementType == ElementType.Node) {
                                DbUtils.batchRecordsDirectNodes(requestChangesetMapId, relatedRecordsToStore,
                                        RecordBatchType.INSERT, conn, maxRecordBatchSize);
                            }
                            else if (elementType == ElementType.Way) {
                                DbUtils.batchRecords(requestChangesetMapId, relatedRecordsToStore,
                                        QCurrentWayNodes.currentWayNodes, null, RecordBatchType.INSERT, conn,
                                        maxRecordBatchSize);
                            }
                            else if (elementType == ElementType.Relation) {
                                DbUtils.batchRecords(requestChangesetMapId, relatedRecordsToStore,
                                        QCurrentRelationMembers.currentRelationMembers, null, RecordBatchType.INSERT,
                                        conn, maxRecordBatchSize);
                            }
                            relatedRecordsToStore.clear();
                        }
                    }
                }
            }
        }

        changeset.updateNumChanges((int) changesetDiffElementsSize);

        // Even if a bounds is specified in the incoming changeset diff data, it
        // should be ignored,
        // per OSM docs.
        BoundingBox newChangesetBounds = changeset.getBounds();
        newChangesetBounds.expand(diffBounds,
                Double.parseDouble(HootProperties.getPropertyOrDefault("changesetBoundsExpansionFactorDeegrees")));

        changeset.setBounds(newChangesetBounds);
        changeset.updateExpiration();

        return changesetDiffElements;
    }

    /**
     * Writes a changeset upload response to an XML document
     *
     * @param changesetId
     *            ID of the uploaded changeset
     * @param changesetDiffElements
     *            Elements that have been modified in the corresponding
     *            changeset request
     * @return a changeset upload response XML document
     */
    private Document writeResponse(long changesetId, List<XmlSerializable> changesetDiffElements) throws Exception {
        Document responseDoc;
        logger.debug("Building response...");

        responseDoc = XmlDocumentBuilder.create();

        org.w3c.dom.Element osmElement = OsmResponseHeaderGenerator.getOsmDataHeader(responseDoc);

        org.w3c.dom.Element diffResultXmlElement = responseDoc.createElement("diffResult");

        diffResultXmlElement.setAttribute("generator", HootProperties.getPropertyOrDefault("generator"));
        diffResultXmlElement.setAttribute("version", HootProperties.getPropertyOrDefault("osmVersion"));

        for (XmlSerializable element : changesetDiffElements) {
            diffResultXmlElement.appendChild(element.toChangesetResponseXml(diffResultXmlElement));
        }

        osmElement.appendChild(diffResultXmlElement);
        responseDoc.appendChild(osmElement);

        return responseDoc;
    }
}
