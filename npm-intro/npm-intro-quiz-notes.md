# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  Node Package Manager. It is a package manager for JavaScript that allows developers to share, distribute, and manage code packages

- What is a package?
  a directory with one or more files in it that also has a file called package.json with some metadata about this package

- What are some other popular package managers?
  Yarn, pnpm, pip

- How can you create a `package.json` with `npm`?
  npm init

- What is a dependency and how do you add one to a package?
  is a library or package your project relies on to function, npx install

- What happens when you add a dependency to a package with `npm`?
  -Installs the package in the node_modules folder.
  -Updates the package.json file under "dependencies".
  -Records the exact version in package-lock.json.

- What is a devDependency and how do you add one to a package?
  is a package needed only during development (e.g., testing, building), npm install [package-name] --save-dev

- How do you define and run `npm` scripts? Why are these useful?
  scripts object in quotations, colon, and curly braces with keys and values
  useful they automate tasks (e.g., starting servers, testing, building) and simplify workflows

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
