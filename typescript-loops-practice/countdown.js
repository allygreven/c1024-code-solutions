'use strict';
/* exported countdown */
function countdown(num) {
  const numArray = [];
  while (num >= 0) {
    numArray.push(num);
    num--;
  }
  return numArray;
}
console.log(countdown(10));
