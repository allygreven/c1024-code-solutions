# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  when it is first added to the DOM and drawn on the page

- What is a React Effect?
  a function that allows you to perform side effects in functional components

- When should you use an Effect and when should you not use an Effect?
  use for actions that interact with the outside world
  dont use if your Effect only adjusts some state based on other state

- When do Effects run?
  after the initial render, after every update, and when dependencies change

- What function is used to declare an Effect?
  useEffect

- What are Effect dependencies and how do you declare them?
  list of all reactive values referenced inside of the setup code
  declared directly inside your component body

- Why would you want to clean up from an Effect?
  to prevent memory leaks, remove unused resources, and avoid unwanted behavior

- How do you clean up from an Effect?
  returning a cleanup function like clearInterval()

- When does the cleanup function run?
  when the component unmounts or before the effect re-runs due to changes in its dependencies

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
