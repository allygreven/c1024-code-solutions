/* exported getIndexes */
function getIndexes(array: any[]): number[] {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(i);
  }
  return newArray;
}
