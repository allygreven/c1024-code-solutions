'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const isItArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      isItArray.push('even');
    } else {
      isItArray.push('odd');
    }
  }
  return isItArray;
}
