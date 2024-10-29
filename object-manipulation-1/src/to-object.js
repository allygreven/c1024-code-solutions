'use strict';
/* exported toObject */
function toObject(keyValuePair) {
  const result = {};
  const [key, value] = keyValuePair;
  result[key] = value;
  return result;
}
