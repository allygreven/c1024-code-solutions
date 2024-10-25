/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */
function getNumbersToTen(): number[] {
  const numbers: number[] = [];
  let currentNumber: number = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('getNumbersToTen()', getNumbersToTen());
/// ///////////////////////////////////////////////////////

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers: number[] = [];
  let currentNumber: number = 2;
  while (currentNumber >= 2 && currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('getEvenNumbersToTwenty()', getEvenNumbersToTwenty());
/// /////////////////////PUT REPEAT WORD FUNCTION HERE//////////////////////////////////

/// ////////////////////////////////////////////////////////////////////
function logEachCharacter(str: string): any {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
console.log('logEachCharacter(javascript) ', logEachCharacter('javascript'));
/// /////////////////////////////////////////////////////////////

function doubleAll(numbers: number[]): number[] {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubleAll([3, 4, 5, 6])', doubleAll([3, 4, 5, 6]));
/// //////////////////////////////SUM ARRAY HERE/////////////////////////////////////
