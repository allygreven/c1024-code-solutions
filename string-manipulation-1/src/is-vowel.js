'use strict';
/* exported isVowel */
function isVowel(char) {
  const newChar = char.toLowerCase();
  if (newChar === 'a') {
    return true;
  } else if (newChar === 'e') {
    return true;
  } else if (newChar === 'i') {
    return true;
  } else if (newChar === 'o') {
    return true;
  } else if (newChar === 'u') {
    return true;
  } else {
    return false;
  }
}
