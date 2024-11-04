'use strict';
const $clickButton = document.querySelector('.click-button');
if (!$clickButton) throw new Error('button does not exist');
function handleClick(event) {
  console.log('Button clicked!');
  console.log(event);
  console.log($clickButton);
}
$clickButton.addEventListener('click', handleClick);
const $hover = document.querySelector('.hover-button');
if (!$hover) throw new Error('button not found');
function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log($hover);
}
$hover.addEventListener('mouseover', handleMouseover);
const $doubleClick = document.querySelector('.double-click-button');
if (!$doubleClick) throw new Error('button not found');
function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log(event);
  console.log($doubleClick);
}
$doubleClick.addEventListener('dblclick', handleDoubleClick);
