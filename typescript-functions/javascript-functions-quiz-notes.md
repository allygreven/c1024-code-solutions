# javascript-functions-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a function in JavaScript?
  a reusable block of code that performs a specific task when called

- Describe the parts of a function **definition**.
  keyword 'function' at beginning, an optional name, comma separated list of zero or more PARAMETERS surrounded by parentheses, opening curly brace indicating the start of the function's code block, optional return statement, closing curly brace indicating end of function's code block

- Describe the parts of a function **call**.
  function's name, comma separated list of zero or more ARGUMENTS surrounded by parentheses

- When comparing them side-by-side, what are the differences between a function **call** and a function **definition**?
  calling a function causes the code block within the definition to be executed, definition is defining the function itself so it can be called

- What is the difference between a **parameter** and an **argument**?
  when we define a function, we declare parameters and that when we call a function, we pass it arguments

- Why are function **parameters** useful?
  it holds the value of the argument--aka a 'placeholder'

- What two effects does a `return` statement have on the behavior of a function?

1. Causes the function to produce a value we can use in our program
2. Prevents any more code in the function's code block from being run

- What is the syntax for defining an arrow function?
  function keyword is not used, comma separated list of zero or more parameters surrounded by parentheses, an arrow => is used between the parameter list and code block, code block within 2 curly braces
  unless no curly braces are used which returns a implicit return

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  it has an implicit return, meaning the arrow function can return a value without using the return keyword

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
