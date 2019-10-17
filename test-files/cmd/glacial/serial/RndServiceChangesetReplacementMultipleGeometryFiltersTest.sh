#!/bin/bash
set -e

# This tests replacement changeset generation with multiple geometry type filters, causing multiple feature types to be replaced.

test-files/cmd/glacial/serial/RndServiceChangesetReplacement.sh.off "RndServiceChangesetReplacementMultipleGeometryFiltersTest" "test-files/BostonSubsetRoadBuilding_FromOsm.osm" "" "-71.4698,42.4866,-71.4657,42.4902" "-71.4809,42.4808,-71.45688,42.49368" "false" "false" "hoot::BuildingCriterion;hoot::HighwayCriterion" "" "false" "" "" "" "" "xml" "20.0" "20.0"