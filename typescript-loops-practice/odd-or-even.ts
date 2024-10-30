/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
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
