const $heading = document.querySelector('h1');
if (!$heading) throw new Error('$heading query failed');

setTimeout(function () {
  $heading.textContent = 'Hello There';
}, 2000);
