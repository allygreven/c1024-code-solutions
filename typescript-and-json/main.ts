const books = [
  {
    isbn: '9798352831533',
    title: 'Never Lie',
    author: 'Frieda McFadden',
  },
  {
    isbn: '893736758373',
    title: 'Midnight Library',
    author: 'Matt Haig',
  },
  {
    isbn: '3872987290',
    title: 'The Paris Apartment',
    author: 'Lucy Foley',
  },
];

console.log('Books Array:', books);
console.log('Type of books:', typeof books);

const booksJSON = JSON.stringify(books);
console.log('Books JSON:', booksJSON);
console.log('Type of booksJSON:', typeof booksJSON);

const studentJSON = '{"number id": "12345", "string name": "Ally"}';
console.log('Student JSON:', studentJSON);
console.log('Type of studentJSON:', typeof studentJSON);

const student = JSON.parse(studentJSON);
console.log('Parsed Student Object:', student);
console.log('Type of parsed student:', typeof student);
