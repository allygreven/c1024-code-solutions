# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  are used to handle asynchronous operations more cleanly. async marks a function as asynchronous, and await pauses execution until a Promise resolves

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Readability: 'async'/'await' simplifies code structure, especially for multiple asynchronous calls.
  Error handling: 'try...catch' is used with 'await' for errors, while 'catch' is used in promise chaining.
  Chaining: Promises naturally chain with then, while await relies on sequential top-to-bottom execution.

- When do you use `async`?
  to define a function that contains asynchronous operations

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  Use await to pause execution until a promise resolves.
  On synchronous functions or when you don't need results immediately
  it executes normally but still returns a resolved promise, adding slight delay

- How do you handle errors with `await`?
  using try...catch

- What do `try`, `catch` and `throw` do? When do you use them?
  try runs code that might throw errors, catch handles those errors, and throw creates custom errors. Use them for controlled error handling in risky operations

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  it continues running asynchronously, and the rejection goes unhandled unless you explicitly catch it later

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  neither :) kidding i think async and await because it looks cleaner and easier to read

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
