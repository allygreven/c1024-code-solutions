# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  insert, select, update, delete

- How do you add a row to a SQL table?
  'insert into' -table in double quotes
  list of columns being inserted is wrapped in () parenthesis
  values being inserted are also wrapped in () in parenthesis --same order as the columns they belong to
  Text values are wrapped in ' single quotes

- How do you add multiple rows to a SQL table at once?
  by specifying more than one tuple of values, separated by commas

- How do you update rows in a database table?
  'update' keyword followed by table name in double quotations
  'set' keyword "column name in double quotes" = value
  'where' keyword "row name in double quotes" = value

- How do you delete rows from a database table?
  'delete' keyword
  'from' followed by "table name in double quotations"
  'where' followed by "row name in double quotes" = value
  \*returning clause not mandatory!!

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  because it applies to all items in the table

- How do you accidentally delete or update all rows in a table?
  by using no 'where' clause

- How do you get back the modified row without a separate `select` statement?

- Why did you get an error when trying to delete certain films?
  because it doesn't meet the true criteria???

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
