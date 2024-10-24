'use strict';
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
function isUnderFive(number) {
  return number < 5;
}
console.log('isUnderFive: ', isUnderFive(3));
/// /////////////////////////////////////////
function isEven(number) {
  return number >= 2 + 2;
}
console.log('isEven: ', isEven(6));
/// //////////////////////////////////////
function startsWithJ(string) {
  return string[0] === 'J';
}
console.log('startsWithJ: ', startsWithJ('Ally'));
const person = {
  name: 'Mike',
  age: 32,
};
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
console.log('isOldEnoughToDrink: ', isOldEnoughToDrink(person));
/// //////////////////////////////////////////////////
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
console.log('isOldEnoughToDrive: ', isOldEnoughToDrive(person));
/// /////////////////////////////////////////////////////
function isOldEnoughToDrinkAndDrive(person) {
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
function categorizeAcidity(pH) {
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
function introduceWarnerBro(name) {
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
function recommendMovie(genre) {
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
