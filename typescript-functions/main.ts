function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log('value of 5 minutes to seconds: ', convertMinutesToSeconds(5));

function greet(name: string): string {
  return `Hey ${name}!`;
}
console.log('value of greet: ', greet('Shawn'));

function getArea(width: number, height: number): number {
  return width * height;
}
console.log('value of area: ', getArea(17, 42));

interface Person {
  firstName: string;
  lastName?: string;
}

const getFirstName = (person: Person): string => {
  return person.firstName;
};

const personName: Person = {
  firstName: 'Ally',
  lastName: 'Greven',
};

console.log('value of getFirstName: ', getFirstName(personName));

/// /////////////////////////////////////////

const array: string[] = ['pink', 'green', 'purple'];

const getLastElement = (array: string[]): string => {
  return array[array.length - 1];
};

console.log('value of getLastElement: ', getLastElement(array));
/// ////////////////////////////////////////////////

function callOtherFunction(otherFunction: Function, params: any): any {
  return otherFunction(params);
}

function anotherFunction(params: any): any {
  return params;
}

console.log(
  'value of callOtherFunction: ',
  callOtherFunction(anotherFunction, 2)
);
