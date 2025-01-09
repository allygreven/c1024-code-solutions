# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  a column in a database table that creates a link between two tables. It references the primary key of another table to ensure data consistency and enforce relationships between the tables.

- How do you join two SQL tables? (Provide at least two syntaxes.)
  select \*
  from "products"
  join "suppliers" using ("supplierId");

  select "products"."name" as "product",
  "suppliers"."name" as "supplier"
  from "products"
  join "suppliers" using ("supplierId");

- How do you temporarily rename columns or tables in a SQL statement?
  use an alias with 'as' keyword

- How do you create a one-to-many relationship between two tables?
  a foreign key in one table pointing to a primary key in another table

- How do you create a many-to-many relationship between two tables?
  by introducing a 3rd table that contains a foreign key to one of the tables and another foreign key to the other table. This table is referred to as a "join table"

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
