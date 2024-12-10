# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  are special functions that allow components to have access to state and other React features

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  -The function name must start with use followed by an uppercase letter
  -can only be called at the top level of your components or your own Hooks

- What is the purpose of state in React?
  is a component's "memory", or data that a component saves so it can modify its output

- Why can't we just maintain state in a local variable?
  because local variables don't trigger re-rendering

- What two actions happen when you call a `state setter` function?
  -state is updated
  -component re-renders

- When does the local `state variable` get updated with the new value?
  when the component gets re-rendered

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
