import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

test('returns only the even numbers evenNumbers() function', () => {
  expect(evenNumbers([4, 3, 2, 6])).toEqual([4, 2, 6]);
});

test('returns dollars and cents toDollars() function', () => {
  expect(toDollars(5.52)).toEqual('$5.52');
});

test('returns number divided by divisor divideBy() function', () => {
  expect(divideBy([2, 4, 6], 2)).toEqual([1, 2, 3]);
});

test('mulitplies the value of key multiplyBy() function', () => {
  expect(multiplyBy({ age: 30 }, 2)).toEqual({ age: 60 });
});
