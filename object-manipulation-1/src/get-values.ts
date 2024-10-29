/* exported getValues */
function getValues(object: any): any[] {
  const values: any[] = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
