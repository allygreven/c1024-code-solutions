interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'Ally',
  lastName: 'Greven',
  age: 30,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'set costumer';

console.log('value of livesInIrvine: ', student.livesInIrvine);
console.log('value of previousOccupation: ', student.previousOccupation);

console.log('value of student: ', student);
console.log('typeof student: ', typeof student);

/// ///////////////////////////////////////////////////////

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
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
/// ///////////////////////////////////////////////////////

interface Pet {
  name: string;
  kind: string;
}

const pet: Pet = {
  name: 'Evie & Bella',
  kind: 'pomeranians',
};

delete pet.name;
delete pet.kind;

console.log('value of pet: ', pet);
console.log('typeof pet: ', typeof pet);
