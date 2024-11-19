const $pics = document.querySelectorAll('.image');
const $bubbles = document.querySelectorAll('.bubble');
// const $slides = document.querySelectorAll('.carousel-images img');
// const $slideCount = $slides.length;

if (!$pics) throw new Error('$pics query failed');
if (!$bubbles) throw new Error('$bubbles query failed');
// if (!$slides) throw new Error('$slides query failed');

let count = 0;
const picCarousel = setInterval(function () {
  count++;
  for (let i = 0; i < $pics.length; i++) {
if (count === i) {
  $pics[i].className = 'image'
}
else {
  $pics[i].className = 'image hidden'
}
  }
  }





  //     clearInterval(picCarousel);
  //   }
  // }, 3000);


const $eventTarget = event.target as HTMLDivElement;

const $slideImage = $eventTarget.className('image')
  for (let i = 0; i < $pics.length; i++) {
    if ($pics[i].className('image') === $slideImage) {
      $pics[i].className = 'image';
    } else {
      $pics[i].className = 'image hidden';
    }
  }
