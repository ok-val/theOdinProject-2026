# Server-side Middleware

Source:

- https://expressjs.com/en/guide/using-middleware/
- https://medium.com/@viral_shah/express-middlewares-demystified-f0c2c37ea6a1
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Web_frameworks

Middleware is ANY handler functions that execute between the receipt of
the request and the final dispatch of the response (back to the web
server).

By definition, a function that sits between the response receipt and the
response dispatch is a middleware. And it's also the case of that if
that code sits beyond the req-res lifecycle is will not get executed.

```js
app.use(func);
app.get('/', func);
// if .get handler fires, sends a response, the rest of code don't run
app.use(func);
```

# Middleware functions

- Execute any code
- Modify the req and res objects
- End the req-res cycle
- Pass control to the next middleware

## Examples of middleware

- Logger middleware to log details of every request
- Authentication check middleware for protected routes
- Middle to parse JSON data from requests
- Return 404 pages

## Anatomy of a Middleware

**A middleware must either send a response back to the client or call**
**`next()` to pass control to the subsequent middleware**, for the
request will hang indefinitely otherwise.

```js
app.use((req, res, next) => {
  console.log('new request made');
  console.log(req.method);
  next();
});
```

```js
app.use((req, res, next) => {
  // Middleware can be used to modify the req object
  req.customMessage = 'custom greetings';
  next();
});
```

## Error: Multiple responses in a single route handler

```js
app.use((req, res, next) => {
  // This method ends the req-res cycle.
  // This function, however, keeps running
  res.send('Hi');

  // This one logs
  console.log('Middle');

  // This one throws an Error since a response has been made
  res.send('Bye');
});
```

## Different types of middleware

| **Type**       | **How it's loaded**                  | **Primary use case**                       |
| -------------- | ------------------------------------ | ------------------------------------------ |
| App-level      | app.use(myMiddleware)                | Runs globally on every req                 |
| Router-level   | router.use(middleware)               | Bound locally to express.Router() instance |
| Built-in       | express.json(), express.static()     | Express wares that parses static payload   |
| Third-party    | app.use(thirdpartyMw)                | Various                                    |
| Error-handling | app.use((err, req, res, next) => {}) | Process errors globally                    |

## Third-party middleware

- https://expressjs.com/en/resources/middleware/
