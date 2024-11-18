const heading = document.querySelector('h1');
if (!heading) throw new Error('$heading query failed');

let count = 4;
const intervalId = setInterval(function () {
  count--;
  if (count > 0) {
    heading.textContent = `${count}`;
  } else {
    heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}, 1000);
