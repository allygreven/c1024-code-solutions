/* exported reverse */
function reverse(array: any): any[] {
  let reversed: any[] = [];
  for (const value of array) {
    reversed += value;
  }
  return reversed;
}

// function reverseString(str: string): string {
//   let reversed = '';
//   for (const char of str) {
//     reversed += char;
//   }
//   return reversed;
