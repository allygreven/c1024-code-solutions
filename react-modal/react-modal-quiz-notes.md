# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  to create both modal and non-modal dialog boxes

- How do you show and hide a modal dialog?
  .showModal() method to show
  .close()

- How do you manipulate child components in React? Why will that no work for the `<dialog>` element?
  by passing props or using refs
  not work because its methods are not tied to React's state or lifecycle

- How do you call the dialog element's functions in React?
  useRef()

- How can you render nested components or JSX elements in React?
  include them within the JSX of your parent component

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
