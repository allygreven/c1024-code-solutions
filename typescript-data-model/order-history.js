'use strict';
const orderHistory = [
  {
    orderType: 'book',
    total: 34,
    orderNumber: 8772232,
    title: 'JavaScript for impatient programmers',
    author: 'Dr. Axel Rauschmayer',
    deliveryDate: 'August 8, 2020',
  },
  {
    orderType: 'book',
    total: 44.53,
    orderNumber: 1280257,
    title: 'The Timeless Way of Building',
    author: 'Christopher Alexander',
    deliveryDate: 'July 20, 2020',
  },
  {
    orderType: 'controller',
    total: 17.22,
    orderNumber: 9059409,
    deliveryDate: 'July 7, 2020',
  },
  {
    orderType: 'misc',
    total: 138.93,
    orderNumber: 2648248,
    title: 'The Art of Sql',
    author: 'Stephane Faroult',
    deliveryDate: 'July 5, 2020',
  },
];
console.log('item in second order is ', orderHistory[1].orderType);
console.log('delivery date of third order is', orderHistory[2].deliveryDate);
console.log('order number of first order is ', orderHistory[0].orderNumber);
