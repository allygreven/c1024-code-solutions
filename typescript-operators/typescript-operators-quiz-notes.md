# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  they check conditions:
  -'&&' returns the second value if the first is true; otherwise, it returns the first value.
  -'||' returns the first value if it’s true; otherwise, it returns the second value.
  -Outside 'if' statements, they’re used for shortcuts

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  is when logical operators stop evaluating as soon as the result is determined:
  -'&&' (AND): Stops if the first operand is false (since the whole expression can't be true),
  -'||' (OR): Stops if the first operand is true (since the whole expression is already true)

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  it handles cases where variables might be null or undefined, provides a reliable way to set default values without the pitfalls of logical OR with falsy values like 0 or ''

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  -It evaluates expr1 if the condition is true, otherwise evaluates expr2
  -It simplifies small if/else blocks into single-line ternary operations

- What is the `?.` (optional chaining) operator? When would you use it?
  -to safely access properties on objects that might not exist, preventing runtime errors due to undefined or null object properties
  -Use it when you're unsure if part of an object exists:

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  -Allows an iterable such as an array or a string to be expanded in places where zero or more arguments or elements are expected, or an object expression to be expanded in places where zero or more key-value pairs are expected.
  -It's used to clone or merge objects and arrays, which is extremely useful in state management scenarios, like managing local component state in frameworks like React
  -Use it by combining multiple objects or arrays into a single object or array, and to pass an array of arguments to a function.

- What data types can be spread into an array? Into an object?
  -Into an array: Iterable types like arrays, strings, and sets
  -Into an object: Objects with enumerable properties

- How does spread syntax differ from rest syntax?
  -'spread' expands elements of arrays or objects into individual items (aka 'unpacks')
  -'rest' collects multiple values into an array or object (aka 'packs')

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
