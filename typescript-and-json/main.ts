const array = {
  isbn: '9798352831533',
  title: 'Never Lie',
  author: 'Frieda McFadden',
};

console.log('value of isbn:', typeof '9798352831533');
console.log('value of title:', typeof 'Never Lie');
console.log('value of author:', typeof 'Frieda McFadden');

const json = JSON.stringify(array);

console.log('value of json:', typeof json);

const studentJSON = '{"number id": "12345", "string name": "Ally"}';
console.log('JSON string:', studentJSON);

const obj = JSON.parse(studentJSON);
console.log('JSON object:', obj);
