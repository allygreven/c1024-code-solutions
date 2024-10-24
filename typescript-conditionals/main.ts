/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number: number): boolean {
  return number < 5;
}
console.log('isUnderFive: ', isUnderFive(3));
/// /////////////////////////////////////////
function isEven(number: number): boolean {
  return number >= 2 + 2;
}
console.log('isEven: ', isEven(6));
/// //////////////////////////////////////
function startsWithJ(string: string): boolean {
  return string[0] === 'J';
}
console.log('startsWithJ: ', startsWithJ('Ally'));
/// ///////////////////////////////////////////
interface Person {
  name: string;
  age: number;
}
const person: Person = {
  name: 'Mike',
  age: 32,
};

function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
console.log('isOldEnoughToDrink: ', isOldEnoughToDrink(person));
/// //////////////////////////////////////////////////

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
console.log('isOldEnoughToDrive: ', isOldEnoughToDrive(person));
/// /////////////////////////////////////////////////////

function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  if (person.age >= 21 && person.age >= 16) {
    return false;
  } else {
    return false;
  }
}

console.log(
  'isisOldEnoughToDrinkAndDrive: ',
  isOldEnoughToDrinkAndDrive(person)
);
/// //////////////////////////////////////////////////

function categorizeAcidity(pH: number): string {
  if (pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH < 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
console.log(categorizeAcidity(15));
/// ///////////////////////////////////////////////

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return "We're the Warner Brothers!";
    case 'wakko':
      return "We're the Warner Brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}
console.log('introduceWarnerBro: ', introduceWarnerBro('dot'));
/// ///////////////////////////////////////////////

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Terminator';
    case 'comedy':
      return 'Pineapple Express';
    case 'horror':
      return 'Insidious';
    case 'drama':
      return 'The Notebook';
    case 'musical':
      return 'Annie';
    case 'sci-fi':
      return 'Alien';
    default:
      return 'invalid genre';
  }
}
console.log('recommendMovie: ', recommendMovie('comedy'));
