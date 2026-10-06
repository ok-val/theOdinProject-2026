# Express glossary

Source:

- https://expressjs.com/en/guide/routing/
- https://expressjs.com/en/guide/using-middleware/

- **Express app**: Express is a routing and middleware web framework for
  Node. An express app is a series of middleware function calls executed
  during the req-res cycle.

- Construction of a Router Layer:

  > app['method']('<path>', ...callbacks);

- **Route layer:** Individual employment of either a middleware, request
  router (`.get()`/`.post()`), error handler, or another Router.

- **Route method:** Corresponds to HTTP methods. Can be attached to
  `express` class instance

- **Route path:** a URI that provides the specific endpoint for the
  specified method. Also captures the `params` and `queries` from the
  URL. Route path can be evaluated either as string or regex.

- **Route handler:** The callback functions that runs when the request
  URL is matched with an endpoint. There can be one or multiple
  callbacks.

- **Middleware:** is ANY handler functions that execute between the
  receipt of the request and the final dispatch of the response (back to
  the web server).

- Controllers vs Middleware: While both controllers and middlewares are
  both handler functions, Middleware is lexical in the req-res cycle,
  while Controller is lexical in backend architecture design pattern.

  Middleware subsumes Controllers, meaning that all Controllers are
  Middleware but not all Middlewares are Controllers. This is because if
  my backend architecture could choose not to use Controllers as part of
  the MVC methodology, my implementation must still use Middlewares to
  process and complete the req-res cycle. If I decide to use
  Controllers, they are called back inside route handlers and become a
  subpart of my Middleware implemetation.

  Put simply, Controllers are specific implemetation of Middleware that
  uses the MVC methodology.

  ```js
  app.get(
    '/example/b',
    (req, res, next) => {
      console.log('the response will be sent by the next function ...');
      // remember to call next() to proceed to the next route handler
      next();
    },
    (req, res) => {
      res.send('Hello from B!');
    }
  );
  ```

- **Response methods:** Possible actions of the `http.serverResponse`
  object:

| **Method**         | **Description**                                                      |
| ------------------ | -------------------------------------------------------------------- |
| `res.download()`   | Prompt a file to be downloaded.                                      |
| `res.end()`        | End the response process.                                            |
| `res.json()`       | Send a JSON response.                                                |
| `res.jsonp()`      | Send a JSON response with JSONP support.                             |
| `res.redirect()`   | Redirect a request.                                                  |
| `res.render()`     | Render a view template.                                              |
| `res.send()`       | Send a response of various types.                                    |
| `res.sendFile()`   | Send a file as an octet stream.                                      |
| `res.sendStatus()` | Set HTTP status code AND sends the code's string as body.            |
| `res.status()`     | Set HTTP status code BUT does not send the response; needs chaining. |

- **Route chaining:** A chainable route handler for a route path that
  contains mutliple methods and routes according to the `req` method.
  The benefits of this method is that it reduces redundancy and typos in
  having to repeat the route path if that path can route multiple HTTP
  methods.

  ```js
  // only one of these route methods get run at a time
  app
    .route('/book')
    .get((req, res) => {
      res.send('Get a random book');
    })
    .post((req, res) => {
      res.send('Add a book');
    })
    .put((req, res) => {
      res.send('Update the book');
    });
  ```

## Express Validator

Source:

- https://blog.presidentbeef.com/blog/2020/01/14/injection-prevention-sanitizing-vs-escaping/

Refresher:

- https://youtu.be/SccSCuHhOw0?si=2dZ5Y4dvxyh7jpcy

- **Sanitizing:** Cleaning the data or render it "safe". Consider the
  sanitization context because different input values present different
  vulnerabilities in different context. See more in
  [[validate-and-sanitize.md]].

  > Sanitizing involves removing characters entirely in order to make
  > the value safe.

  > Sanitization is both vulnerability-prone and error-prone. It is very
  > difficult to implement robustly.

  Unlike encoding, sanitization is irreversible. Data is lost when the
  data is sanitized. One may not retrive the original data once it has
  been sanitized.

  Thus, one of the common practice is to implement sanitization at the
  boundary of output or at the time of use.

  When possible, use encoding _routines_ provided by libraries or
  frameworks.

- **Escaping:** Change the interpreted mode of an input value. Text
  input is always being interpreted in some mode and for security, we
  need to change that mode.

  For example, ANSI escape codes tell the terminal to switch from text
  mode to interpreting a sequence of control characters.

  While the term "escape" is more dialectic of OS, "encoding" is more
  dialectic in web security.

- **Encoding:** involves replacing special chars with a different
  representation.

  For example, HTML encoding uses HTML entities. CSS encoding uses CSS
  entities. SQL encoding uses SQL entities.

  For HTML encoding dialect, the `<` is interpreted by default as the
  start of an HTML tag. Because of this behavior, a character sequence
  such as `&lt;` encodes the `<` char.

  > Think of Escaping as Escaping interpretation: To avoid the
  > interpreter interpreting the `<` as the start of a tag, we escape
  > char by using the literal representation of that symbol `&lt;` so
  > that the interpreter would read this as a literal symbol instead of
  > the default interpretation mode.

  For URLs, `/` is interpreted as path separator and the literal `/`
  symbol is encoded by the sequence `%2F`.

  Encoding dialects could borrow from other dialects. For example, URL
  encoding for the literal char `%` uses ACSCII code.

  Encoding (as opposed to hashing) is entirely reversible.
