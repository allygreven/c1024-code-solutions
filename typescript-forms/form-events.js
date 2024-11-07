'use strict';
function handleFocus(event) {
  console.log('focus event was fired');
  const eventTarget = event.target;
  console.log(eventTarget.name);
}
function handleBlur(event) {
  console.log('blur event was fired');
  const eventTarget = event.target;
  console.log(eventTarget.name);
}
function handleInput(event) {
  const eventTarget = event.target;
  console.log(eventTarget.name, eventTarget.value);
}
const $userName = document.querySelector('#user-name');
const $userEmail = document.querySelector('#user-email');
const $userMessage = document.querySelector('#user-message');
if (!$userName) throw new Error('$userName does not exist');
if (!$userEmail) throw new Error('$userName does not exist');
if (!$userMessage) throw new Error('$userMessage does not exist');
$userName.addEventListener('focus', handleFocus);
$userName.addEventListener('blur', handleBlur);
$userName.addEventListener('input', handleInput);
$userEmail.addEventListener('focus', handleFocus);
$userEmail.addEventListener('blur', handleBlur);
$userEmail.addEventListener('input', handleInput);
$userMessage.addEventListener('focus', handleFocus);
$userMessage.addEventListener('blur', handleBlur);
$userMessage.addEventListener('input', handleInput);
