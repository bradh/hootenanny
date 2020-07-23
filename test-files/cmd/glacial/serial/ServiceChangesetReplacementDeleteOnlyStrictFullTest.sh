#!/bin/bash
set -e

# This tests a cut with no replace. It must always run with the strict bounds interpretation to avoid unnecessary deletion of data. Note 
# the "empty" second input data parameter. When only one input is passed in to the command, the operation becomes just a cut operation and not a 
# cut and replace operation. Due to the changeset replacement test script already having particular logic to execute when the second input param
# is empty, we use "empty" here to explicitly specify a cut only operation.

test-files/cmd/glacial/serial/ServiceChangesetReplacement.sh.off "ServiceChangesetReplacementDeleteOnlyStrictFullTest" "test-files/cmd/glacial/serial/ServiceChangesetReplacementSecFilteredToEmptyTest/input1.osm" "empty" "29.031372,1.345701,29.036865,1.351193" "-180,-90,180,90" "true" "true" "" "" "false" "" "" "" "" "xml" "45.0" "45.0" "true"
