const colors: string[] = ['red', 'white', 'blue'];

console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[1]: ', colors[1]);
console.log('value of colors[2]: ', colors[2]);

const colorsUSA: string = `America is ${colors[0]}, ${colors[1]}, and ${colors[2]}`;
console.log(colorsUSA);

colors[2] = 'green';

const colorsMEX: string = `Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}`;
console.log(colorsMEX);

console.log('value of colors: ', colors);
console.log('typeof colors: ', typeof colors);
/// /////////////////////////////////////////////////////////////////

const students: string[] = ['Ally', 'Ashley', 'Carolyn', 'Liam', 'Mike'];

const numberOfStudents: string[] = students.length;
console.log(`there are ${numberOfStudents} students in the class`);

const lastIndex: string = students[numberOfStudents - 1];

const lastStudent: string = lastIndex;
console.log(`the last student in the array is: ${lastStudent}`);

console.log('value of students: ', students);
console.log('typeof students: ', typeof students);
