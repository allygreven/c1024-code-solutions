const heroes: string[] = ['Blossom', 'Bubbles', 'Buttercup', 'Sailor Moon'];

let randomNumber: number = Math.random();
randomNumber *= heroes.length;
console.log(randomNumber);

const randomIndex: number = Math.floor(randomNumber);
console.log('random index: ', randomIndex);

const randomHero: string = heroes[randomIndex];
console.log(randomHero);
/// //////////////////Array Methods///////////////////////////
interface Library {
  title: string;
  author: string;
}

const library: Library[] = [
  {
    title: 'Midnight Library',
    author: 'Matt Haig',
  },
  {
    title: 'Never Lie',
    author: 'Frieda McFadden',
  },
  {
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
  },
];

const lastBook = library.pop();
console.log('last book: ', lastBook);

const firstBook = library.shift();
console.log('first book: ', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('libray: ', library);
/// /////////////////////String Methods///////////////////////////////

const fullName = 'Allyson Greven';

const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);

const firstName: string = firstAndLastName[0];

const sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
/// ////////////////////////Object Methods//////////////////////////////////
interface Employee {
  name: string;
  age: string;
  position: string;
}

const employee: Employee = {
  name: 'Ketch',
  age: 'Taylor',
  position: 'service dog trainer',
};

const employeeKeys = Object.keys(employee);
console.log('employee keys: ', employeeKeys);

const employeeValues = Object.values(employee);
console.log('employee values: ', employeeValues);

const employeePairs = Object.entries(employee);
console.log('employeePairs: ', employeePairs);
