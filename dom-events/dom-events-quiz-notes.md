# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  debugging/troubleshooting, testing and verification, tracking errors

- What is the purpose of events and event handling?
  to notify code of "interesting changes" that may affect code execution, which can arise from user interactions such as using a mouse or resizing a window and changes in the state of the underlying environment

- Are all possible parameters required to use a JavaScript method or function?
  no

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()

- What is a callback function?
  is a function passed into another function as an argument

- What object is passed into an event listener callback when the event fires?
  event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  is a property of the event object in JavaScript, log in the console, MDN

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  in the first snippet, 'handleClick' will not be executed immediately, it will only be called when the 'click' event occurs
  in the second, handleClick() will be executed immediately when addEventListener is called

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
