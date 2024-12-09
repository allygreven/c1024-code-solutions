import { takeAChance } from './take-a-chance.js';

const promise = takeAChance('Ally');

promise
  .then((message) => console.log(message))
  .catch((error) => console.error(`Error: ${error.message}`));
