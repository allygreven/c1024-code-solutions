'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const noNullArray = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNullArray.push(values[i]);
    }
  }
  return noNullArray;
}
