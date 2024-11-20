const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((value) => {
  console.log('value in order:', value);
});

values.forEach((reverse, index) => {
  const reverseValue = values.length - 1 - index;
  console.log('value reverse order:', values[reverseValue]);
});
