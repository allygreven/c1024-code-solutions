'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('value of 5 minutes to seconds: ', convertMinutesToSeconds(5));
function greet(name) {
  return `Hey ${name}!`;
}
console.log('value of greet: ', greet('Shawn'));
function getArea(width, height) {
  return width * height;
}
console.log('value of area: ', getArea(17, 42));
const getFirstName = (person) => {
  return person.firstName;
};
const personName = {
  firstName: 'Ally',
  lastName: 'Greven',
};
console.log('value of getFirstName: ', getFirstName(personName));
/// /////////////////////////////////////////
const array = ['pink', 'green', 'purple'];
const getLastElement = (array) => {
  return array[array.length - 1];
};
console.log('value of getLastElement: ', getLastElement(array));
/// ////////////////////////////////////////////////
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
function anotherFunction(params) {
  return params;
}
console.log(
  'value of callOtherFunction: ',
  callOtherFunction(anotherFunction, 2)
);
