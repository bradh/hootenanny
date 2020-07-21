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
 * @copyright Copyright (C) 2020 DigitalGlobe (http://www.digitalglobe.com/)
 */

#include "RelationMembershipCopier.h"

// Hoot
#include <hoot/core/util/Factory.h>
#include <hoot/core/util/Log.h>
#include <hoot/core/elements/Relation.h>
#include <hoot/core/index/OsmMapIndex.h>

namespace hoot
{

HOOT_FACTORY_REGISTER(OsmMapOperation, RelationMembershipCopier)

RelationMembershipCopier::RelationMembershipCopier(
  const ElementId& idToCopyFrom, const std::vector<ElementId>& idsToCopyTo) :
_idToCopyFrom(idToCopyFrom),
_idsToCopyTo(idsToCopyTo)
{
}

void RelationMembershipCopier::apply(const OsmMapPtr& map)
{
  if (_idToCopyFrom.isNull())
  {
    throw IllegalArgumentException("RelationMembershipCopier: No copy from element ID specified.");
  }
  if (_idsToCopyTo.size() == 0)
  {
    throw IllegalArgumentException("RelationMembershipCopier: No copy to element IDs specified.");
  }

  LOG_TRACE(
    "Copying relation membership from " << _idToCopyFrom << " to " << _idsToCopyTo.size() <<
    " elements...");

  _numAffected = 0;
  _numProcessed = 0;

  const std::set<long> owningRelationIds =
    map->getIndex().getElementToRelationMap()->getRelationByElement(_idToCopyFrom);
  for (std::set<long>::const_iterator it = owningRelationIds.begin(); it != owningRelationIds.end();
       ++it)
  {
    RelationPtr owningRelation = map->getRelation(*it);
    if (owningRelation)
    {
      _numProcessed++;
      const QString role = owningRelation->getMemberRoleById(_idToCopyFrom);
      for (std::vector<ElementId>::const_iterator it = _idsToCopyTo.begin();
           it != _idsToCopyTo.end(); ++it)
      {
        owningRelation->addElement(role, *it);
        _numAffected++;
      }
    }
  }
}

void RelationMembershipCopier::copy(
  const ElementId& idToCopyFrom, const std::vector<ElementId>& idsToCopyTo, const OsmMapPtr& map)
{
  RelationMembershipCopier(idToCopyFrom, idsToCopyTo).apply(map);
}

}
