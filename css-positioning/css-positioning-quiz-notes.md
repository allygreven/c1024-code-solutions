# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  static

- How does setting `position: relative` on an element affect document flow?
  modifies the position of an element while keeping it within the document flow

- How does setting `position: relative` on an element affect where it appears on the page?
  the element still occupies space but can be shifted from its normal position using the top, right, bottom, and left properties

- How does setting `position: absolute` on an element affect document flow?
  Removes the element from the document flow entirely, positioning it relative to its nearest positioned ancestor

- How does setting `position: absolute` on an element affect where it appears on the page?
  allows elements to be placed precisely on the page, but they do not affect the position of other elements

- How do you constrain an absolutely positioned element to a containing block?
  If no ancestor elements have their position property explicitly defined, then by default all ancestor elements will have a static position resulting in the absolutely positioned element contained in the initial containing block

- What are the four box offset properties?
  margin, padding, top, left

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
