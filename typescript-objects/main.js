'use strict';
const student = {
  firstName: 'Ally',
  lastName: 'Greven',
  age: 30,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'set costumer';
console.log('value of livesInIrvine: ', student.livesInIrvine);
console.log('value of previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);
console.log('typeof student: ', typeof student);
const vehicle = {
  make: 'Infiniti',
  model: 'Q50',
  year: 2020,
};
vehicle['color'] = 'grey';
vehicle['isConvertible'] = false;
console.log('value of vehicle color: ', vehicle['color']);
console.log('value of isConvertible: ', vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);
console.log('typeof vehicle: ', typeof vehicle);
const pet = {
  name: 'Evie & Bella',
  kind: 'pomeranians',
};
delete pet.name;
delete pet.kind;
console.log('value of pet: ', pet);
console.log('typeof pet: ', typeof pet);
