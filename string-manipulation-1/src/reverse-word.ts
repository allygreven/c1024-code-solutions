/* exported reverseWord */
function reverseWord(word: string): string {
  let reversed = '';
  for (const char of word) {
    reversed += char;
  }
  return reversed;
}

// use normal for loop
