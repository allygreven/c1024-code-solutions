function handleFocus(event: Event): void {
  console.log('focus event was fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log(eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log('blur event was fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log(eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log(eventTarget.name, eventTarget.value);
}

const $userName = document.querySelector('#user-name') as HTMLInputElement;
const $userEmail = document.querySelector('#user-email') as HTMLInputElement;
const $userMessage = document.querySelector(
  '#user-message'
) as HTMLTextAreaElement;

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
