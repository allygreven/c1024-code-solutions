const $lightBulb = document.querySelector('.light-bulb');
const $container = document.querySelector('.container');

if (!$lightBulb) throw new Error('$lightBulb query failed');
if (!$container) throw new Error('$container query failed');

$lightBulb.addEventListener('click', () => {
  if ($lightBulb.className === 'light-bulb off') {
    $lightBulb.className = 'light-bulb on';
  } else {
    $lightBulb.className = 'light-bulb off';
  }
});

$container.addEventListener('click', () => {
  if ($container.className === 'container off') {
    $container.className = 'container on';
  } else {
    $container.className = 'container off';
  }
});
