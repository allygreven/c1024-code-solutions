/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {}; // 1 * 1 = O(1)
  const unique = []; // 1 * 1 = O(1)
  for (
    let i = 0; // 1 * 1 = O(1)
    i < words.length; // 2 * n = O(n)
    i++ // 2 * n = O(n)
  ) {
    const word = words[i]; // 2 * n = O(n)
    if (!seen[word]) {
      // 2 * n = O(n)
      seen[word] = true; // 2 * n = O(n)
      unique[unique.length] = word; // 3 * n = O(n^3)
    }
  }
  return unique; // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(n^2)

function uniqueQuadratic(words) {
  const unique = []; // 1 * 1 = O(1)
  for (
    let i = 0; // 1 * 1 = O(1)
    i < words.length; // 2 * n^2 = O(n^2)
    i++ // 2 * n^2 = O(n^2)
  ) {
    const word = words[i]; // 2 * n^2 = O(n^2)
    let isUnique = true; // 1 * n = O(n)
    for (
      let c = 0; // 1 * n = O(n)
      c < i; // 1 * n = O(n)
      c++ // 2 * n = O(n)
    ) {
      const comparing = words[c]; // 2 * n = O(n^2)
      if (comparing === word) {
        // 2 * n = O(n^2)
        isUnique = false; // 2 * n = O(n^2)
      }
    }
    if (isUnique) {
      // 1 * n = O(n)
      unique[unique.length] = word; // 1 * n = O(n)
    }
  }
  return unique; // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
