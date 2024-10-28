'use strict';
/* exported reverseWord */
function reverseWord(word) {
  let reversed = '';
  for (const char of word) {
    reversed += char;
  }
  return reversed;
}
// use normal for loop
