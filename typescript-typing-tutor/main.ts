const $span = document.querySelectorAll('span');
const $char = [];

for (let i = 0; i < $span.length; i++) {
  if ($span[i].textContent){
  $char.push($span[i].textContent);
  }
}

if (!$span) throw new Error('$char query failed');

document.addEventListener('keydown', () => {

}

// window.addEventListener(
//   "keydown",
//   (event) => {
//     if (event.defaultPrevented) {
//       return; // Do nothing if the event was already processed
//     }

//     switch (event.key) {
//       case "ArrowDown":
//         // Do something for "down arrow" key press.
//         break;
//       case "ArrowUp":
//         // Do something for "up arrow" key press.
//         break;
//       case "ArrowLeft":
//         // Do something for "left arrow" key press.
//         break;
//       case "ArrowRight":
//         // Do something for "right arrow" key press.
//         break;
//       case "Enter":
//         // Do something for "enter" or "return" key press.
//         break;
//       case " ":
//         // Do something for "space" key press.
//         break;
//       case "Escape":
//         // Do something for "esc" key press.
//         break;
//       default:
//         return; // Quit when this doesn't handle the key event.
//     }

//     // Cancel the default action to avoid it being handled twice
//     event.preventDefault();
//   },
//   true,
// );
