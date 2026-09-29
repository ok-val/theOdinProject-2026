# Express glossary

Source:

- https://expressjs.com/en/guide/routing/

- Construction of a route:

  > app['method']('<path>', ...callbacks);

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
