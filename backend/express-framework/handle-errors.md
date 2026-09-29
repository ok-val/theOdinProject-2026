# Handling errors

Always:

1. Wrap your APIs (inside router handlers) inside a `try/catch` block
   for ESM or the `then().catch()` for CJS.

2. Use an error handling middlware at the end:

```js
app.get('/{*splat}', (req, res) => {
  res.status(404).send('404 page not found');
});

/**
 * In addition to the splat catch-all, I also need to catch any errors
 * thrown in the previous middleware.
 *
 * See more about this middleware type in
 * '../theory/what-is-middleware.md'
 */

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statusCode || 500).send(err);
});
```

## Creating custom Errors

The solutions above would only give me a generic 500 server error. For
cases that needs custom error messsage, I need to extend the Error class
to create a new instance of an Error object.

```js
// errors/CustomerNotFoundError.js
class CustomerNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.name = 'NotFoundError';
  }
}

export default CustomerNotFoundError;
```

```js
// server-main.js
import CustomerNotFoundError from 'errors/CustomerNotFoundError.js';

// ...

app.get('/', (req, res) => {
  try {
    //
    if (!customer) {
      throw new CustomerNotFoundError(`${customer.name} was not found`);
    }
  } catch (error) {
    console.error(error);
  }
});
```
