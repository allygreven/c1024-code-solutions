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

function repeatWord(word: string, times: number): string {
  let count: number = 1;
  let repeated: string = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log(repeatWord('iloveloops', 27));

/// ////////////////////////////////////////////////////////////////////
function logEachCharacter(str: string): void {
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
function sumArray(numbers: number[]): number {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

/// /////////////////////////////////////////////////////////////////
function reverseString(str: string): string {
  let reversed = '';
  for (const char of str) {
    reversed += char;
  }
  return reversed;
}
/// ///////////////////////////////////////////////////////////////////
const obj = {
  firstName: 'Ally',
  favNum: 58,
  favAnimal: 'moo deng',
};

function getKeys(obj: Record<string, unknown>): string[] {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
console.log('getKeys: ', getKeys(obj));
/// /////////////////////////////////////////////////////////////////////////

function getValues(obj: Record<string, unknown>): unknown[] {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}
console.log('getValues: ', getValues(obj));
