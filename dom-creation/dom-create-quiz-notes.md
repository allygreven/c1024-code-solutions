# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  no

- How do you add an element as a child to another element?
  appendChild()

- What do you pass as the arguments to the `element.setAttribute()` method?
  first- a string of the attribute(class, id, type etc.)
  second- the value that you would like to assign to that attribute

- What steps do you need to take in order to insert a new element into the page?
  --Select the parent element using document.querySelector() or similar.
  --Create the new element using document.createElement().
  --Optionally set attributes or content.
  --Append the new element to the parent using appendChild()

- What is the `textContent` property of an element object for?
  is used to get or set the text content of an element, excluding any HTML tags

- Name two ways to set the `class` attribute of a DOM element.
  className property
  setAttribute method

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  reusability and maintainability

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
