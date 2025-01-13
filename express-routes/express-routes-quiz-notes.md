# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  create = post
  read = get
  update = put
  delete = delete

- What is Express middleware?
  is a function that fulfills the requested action

- What is Express middleware useful for?
  is useful for handling requests and responses. It allows you to add functionality like logging, authentication, error handling, and modifying request/response data before passing control to the next part of the application

- How do you mount a middleware with an Express application?
  app.use() method

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  req (request): Contains information about the incoming HTTP request, such as headers, body, and query parameters.
  res (response): Used to send back the HTTP response, including status, headers, and data.
  next: A function that passes control to the next middleware or route handler in the stack.

- How do you specify and retrieve route parameters?
  specify: using a colon (:) in the route path
  retrieve: req.params

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
