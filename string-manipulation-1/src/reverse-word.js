'use strict';
/* exported reverseWord */
function reverseWord(word) {
  let reversed = '';
  for (let i = 0; i >= word.length - 1; i--) {
    reversed += word[i];
  }
  return reversed;
}
