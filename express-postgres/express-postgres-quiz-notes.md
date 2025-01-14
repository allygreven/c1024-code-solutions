# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  is a collection of node.js modules for interfacing with your PostgreSQL database

- How do you tell `pg` which database to connect to?
  with async/await

- How do you send SQL to PostgreSQL from your Express server?
  db.query()

- How do you access the rows that get returned from the SQL query?
  const row = result.rows[0]; or destructuring (const [row] = result.rows;)
  res.send()

- What must you always remember to put around your asynchronous route handlers? Why?
  try/catch
  we guarantee that we always return a response to the client, even if an error occurs

- What is a SQL Injection Attack and how do you avoid it in `pg`?
  a code injection technique that hackers can use to insert malicious SQL statements
  by using parameterized queries

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
