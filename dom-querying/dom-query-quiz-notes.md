# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  to debug code, understand data, track progress, test functions

- What is a "model"?
  refers to a structured representation of data that an application uses, defining how data is organized and how it can be manipulated

- Which "document" is being referred to in the phrase Document Object Model?
  DOM refers to an HTML or XML document

- What is the word "object" referring to in the phrase Document Object Model?
  refers to the elements and nodes that represent parts of the document, such as tags, text, and attributes

- What is a DOM Tree?
  It's referencing the tree-like structure of HTML elements, with the HTML document as the root, and other elements (like <body>, <header>, <div>, etc.) as branches and leaves

- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.querySelector()
  document.getElementById()

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  `document.querySelectorAll()`

- Why might you want to assign the return value of a DOM query to a variable?
  To improve code readability, efficiency, and to avoid repeated DOM queries

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  ensures that the HTML elements load before the JavaScript executes, improving the load times and prevents JavaScript from blocking the rendering of HTML

- What does `document.querySelector()` take as its argument and what does it return?
  takes a CSS selector as its argument and returns the first matching element in the document

- What does `document.querySelectorAll()` take as its argument and what does it return?
  takes a CSS selector as its argument and returns a NodeList of all matching elements in the document, or an empty NodeList if no matches are found

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
