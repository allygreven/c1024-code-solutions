# ds-hashtable-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Briefly describe the Hash Table data structure.
  a data structure that stores data as key/value pairs. You look up an item in a Hash Table using the key, and the Hash Table returns the value.

- What are some examples of when you would use a Hash Table?
  search engine, spell checking, user authentication

- How do you read a key's value in a Hash Table? What is its time complexity?
  calculate its 'hash', locate the index where the value is stored, search bucket for key-value pair
  constant time complexity

- How do you add a key/value into a Hash Table? What is its time complexity?
  use a hash function to calculate index based on the key then store the key-value pair at that index
  constant time complexity

- How do you update a key's value in a Hash Table? What is its time complexity?
  access the key using the hash function to find its location within the table, then replace existing value associated with that key with the new value
  constant time complexity

- How do you remove a key/value from a Hash Table? What is its time complexity?
  calculation hash function, use function to locate the index/bucket, find key in bucket, remove the key-value pair from the bucket

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
