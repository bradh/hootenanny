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

#ifndef RELATION_MEMBERSHIP_COPIER_H
#define RELATION_MEMBERSHIP_COPIER_H

// Hoot
#include <hoot/core/elements/OsmMap.h>
#include <hoot/core/ops/ConstOsmMapOperation.h>

namespace hoot
{

/**
 * Copies relation membership from one element to others
 */
class RelationMembershipCopier : public ConstOsmMapOperation
{
public:

  static std::string className() { return "hoot::RelationMembershipCopier"; }

  RelationMembershipCopier() = default;
  /**
   * Constructor
   *
   * @param idToCopyFrom element ID from which to copy relation membership
   * @param idsToCopyTo element IDs to copy relation membership to
   */
  RelationMembershipCopier(const ElementId& idToCopyFrom, const std::vector<ElementId>& idsToCopyTo);
  virtual ~RelationMembershipCopier() = default;

  /**
   * @see OsmMapOperation
   */
  void apply(const OsmMapPtr& map);

  /**
   * Given a relation member, copies membership for all relations the member is a part of to group
   * of elements.
   *
   * @param idToCopyFrom element ID from which to copy relation membership
   * @param idsToCopyTo element IDs to copy relation membership to
   * @param map map owning the elements
   */
  static void copy(const ElementId& idToCopyFrom, const std::vector<ElementId>& idsToCopyTo,
                   const OsmMapPtr& map);

  /**
   * @see OperationStatusInfo
   */
  virtual QString getInitStatusMessage() const
  {
    return
      "Copying relation membership from " + _idToCopyFrom.toString() + " to " +
      QString::number(_idsToCopyTo.size()) + " elements.";
  }

  /**
   * @see OperationStatusInfo
   */
  virtual QString getCompletedStatusMessage() const
  {
    return
      "Copied " + QString::number(_numProcessed) + " relation memberships to " +
      QString::number(_numAffected) + " elements.";
  }

  virtual QString getDescription() const
  { return "Copies relation memberships"; }

  virtual std::string getClassName() const { return className(); }

private:

  // see explanation in constructor doc
  ElementId _idToCopyFrom;
  std::vector<ElementId> _idsToCopyTo;
};

}

#endif // RELATION_MEMBER_SWAPPER_H
