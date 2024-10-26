/* exported countdown */
function countdown(num: number): number[] {
  const numArray: number[] = [];
  while (num >= 0) {
    numArray.push(num);
    num--;
  }
  return numArray;
}
console.log(countdown(10));
