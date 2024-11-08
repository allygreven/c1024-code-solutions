const $container = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

if (!$container) throw new Error('$container query failed');
if (!$tab) throw new Error('$tab query failed');
if (!$view) throw new Error('$view query failed');

$container.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLDivElement;
  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < $tab.length; i++) {
      if ($tab[i] === $eventTarget) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
  }
  const $dataValue = $eventTarget.getAttribute('data-view');
  for (let i = 0; i < $view.length; i++) {
    if ($view[i].getAttribute('data-view') === $dataValue) {
      $view[i].className = 'view';
    } else {
      $view[i].className = 'view hidden';
    }
  }
});
