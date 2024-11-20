'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const pricesArray = prices.map((price) => {
  return { price, salePrice: price / 2 };
});
console.log('price objects:', pricesArray);
const formatPrice = prices.map((price) => {
  return `$${price}`;
});
console.log('formatted prices:', formatPrice);
