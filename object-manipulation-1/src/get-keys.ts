/* exported getKeys */
function getKeys(object: any): string[] {
  const keys: string[] = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
