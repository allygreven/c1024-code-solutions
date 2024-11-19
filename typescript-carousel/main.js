"use strict";
const $pics = document.querySelectorAll('.image'); // view
const $bubbles = document.querySelectorAll('.bubble'); // tab
const $slides = document.querySelectorAll('.carousel-images img');
const $slideCount = $slides.length;
if (!$pics)
    throw new Error('$pics query failed');
if (!$bubbles)
    throw new Error('$bubbles query failed');
if (!$slideCount)
    throw new Error('$slideCount query failed');
document.addEventListener('click', (event) => {
    const $eventTarget = event.target;
    if ($eventTarget.matches('.bubble')) {
        for (let i = 0; i < $bubbles.length; i++) {
            if ($bubbles[i] === $eventTarget) {
                $bubbles.className = 'bubble active';
            }
            else {
                $bubbles[i].className = 'bubble';
            }
        }
    }
});
// setInterval(() => {
//   let nextIndex = currentIndex + 1; // Move to the next slide
//   if (nextIndex >= slideCount) nextIndex = 0; // Loop back to the first slide
//   goToSlide(nextIndex);
// }, 3000);
let count = 0;
const picCarousel = setInterval(function () {
    count++;
    if (count >= $slideCount) {
        clearInterval(picCarousel);
    }
}, 3000);
// const count = 0;
const picsCount = $pics.length;
for (let i = 0; i < picsCount; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    if (i === 0)
        bubble.classList.add('active'); // highlight the first bubble
    bubble.addEventListener('click', () => goToSlide(i)); // add click listener to bubbles
    $bubbles.appendChild(bubble);
}
/// ////////////////////////////////////////////////////////////////
// const imagesContainer = document.querySelector('.carousel-images');
// const bubblesContainer = document.querySelector('.carousel-bubbles');
// const slides = document.querySelectorAll('.carousel-images img');
// const slideCount = slides.length;
let currentIndex = 0; // Start at the first image
// Create bubbles dynamically
for (let i = 0; i < slideCount; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    if (i === currentIndex)
        bubble.classList.add('active'); // Highlight the first bubble
    bubble.addEventListener('click', () => goToSlide(i)); // Add click listener to bubbles
    bubblesContainer.appendChild(bubble);
}
const bubbles = document.querySelectorAll('.carousel-bubbles .bubble');
// Function to switch to a specific slide
function goToSlide(index) {
    imagesContainer.style.transform = `translateX(${-index * 300}px)`; // Move images container
    currentIndex = index;
    // Update bubble styles
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].classList.toggle('active', i === index);
    }
}
// Automatic slide switching using setInterval
setInterval(() => {
    let nextIndex = currentIndex + 1; // Move to the next slide
    if (nextIndex >= slideCount)
        nextIndex = 0; // Loop back to the first slide
    goToSlide(nextIndex);
}, 3000);
