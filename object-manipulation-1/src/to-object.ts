/* exported toObject */
function toObject(keyValuePair: [string, any]): any {
  const result: { [key: string]: any } = {};
  const [key, value] = keyValuePair;
  result[key] = value;
  return result;
}
