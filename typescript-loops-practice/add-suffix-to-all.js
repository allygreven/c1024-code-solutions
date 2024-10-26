'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newArray = [];
  for (const word of words) {
    const result = word + suffix;
    newArray.push(result);
    // word.push(suffix);
  }
  return newArray;
}
