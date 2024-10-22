const width: number = 12;
const height: number = 14;
const area: number = width * height;
console.log('value of area: ' + area);
console.log('typeof area: ' + typeof area);

const bill: number = 6;
const payment: number = 12;
const change: number = payment - bill;
console.log('value of change: ' + change);
console.log('typeof change: ' + change);

const quizzes: number = 95;
const midterm: number = 83;
const final: number = 92;
const grade: number = (quizzes + midterm + final) / 3;
console.log('value of grades: ' + grade);
console.log('typeof grades: ' + grade);

const firstName: string = 'Allyson';
const lastName: string = 'Greven';
const fullName: string = firstName + ' ' + lastName;
console.log('value of full name: ' + fullName);
console.log('typeof full name: ' + fullName);

const pH: number = 9;
const isAcidic: boolean = pH < 7;
console.log('value of pH: ' + isAcidic);
console.log('typeof isAcidic: ' + isAcidic);

const headCount: number = 58;
const isSparta: boolean = headCount === 300;
console.log('value of isSparta: ' + isSparta);
console.log('typeof isSparta: ' + isSparta);

let motto: string = fullName;
motto += ' ' + 'is the GOAT!';
console.log('value of motto: ' + motto);
console.log('typeof motto: ' + motto);
