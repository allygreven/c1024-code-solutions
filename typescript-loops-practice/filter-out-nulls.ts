/* exported filterOutNulls */
function filterOutNulls(values: unknown[]): any[] {
  const noNullArray: any = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNullArray.push(values[i]);
    }
  }
  return noNullArray;
}
