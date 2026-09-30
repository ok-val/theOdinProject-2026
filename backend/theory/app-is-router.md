# The Layer Stack of Express App

Source:

- https://medium.com/@viral_shah/express-middlewares-demystified-f0c2c37ea6a1

## App == Router

Every Express App is, at its core, is a Router. When an App is created,
a root level layer is created inside a Router instance. So at the
app-level is a root-level Router. Every sub-router that gets called in
this app is thus considered a mini-app. Thus is why these terms are used
interchangeably.

> In short, an Express App is a root-level Router.

> Any `app.METHOD()` creates a **new layer** in the Router's stack.

> The term router, used in this context, refers to a sub-router inside
> the app.

## Structure of an Express App

The structure of an Express App is a **stack of layers**.

Each layer which can be one (or a combination) of these things:

1. **Middleware:** Via `.use()`; modifies the req or res, then sends or
   calls `next()`
2. **Route:** Via `.get()` (etc.); contains the actual route methods and
   has the same signature as the Middleware
3. **Error handler:** Via `.func(err, req, res, next)` (all four need be
   present); handles any errors thrown by any previous Layers or sent
   from prev `next()`
4. **Another router:** Via `.METHOD(router)`; injects a mini-app for the
   specified route path.

## Request handling

When a request comes in, here's how it's handled:

- Express to iterate through the Layer-stack: Root router starts
  processing by looping through the layer-stack, calling the handler
  function on every Layer if Path Matching returns `true`.

- Path matching: See more in '../express-framework/path-matching.md'.

- Nested layer: Colloquially called the routers (created by
  `express.Router()` class).

- Error handling: These middleware must be at the bottom of the stack
  due to how request flow in conjuction with `LayerError` (see below).

- Error state: While iterating through the Layer-stack, the Router keeps
  track of a variable called `LayerError` (initialized as `null`). While
  `null`, the Layer operates in a non-errored state which mandates that
  the specific `handle_request` wrapper function to handle subsequent
  middlewares, route handlers, or other routers. Otherwise, the Router
  uses the `handler_error` to pass the value down error-handling
  middlewares.

  This var stores whatever errors that are thrown by any Layers and
  objects that may be passed by `next()`.

  Once `LayerError` is non-null, the Router may enter **errored state**
  based on the object that was passed into `next()`

  - `next()`/`(null)`/`(undefined)`: Continue with `handle_request`
  - `next('router')`: Skip the remaining Layers in the current level,
    exit to the parent Router, continue with `handle_request`.
  - `next('route')`: Pass control to the next route handler matching the
    request path, continue with `handle_request`.
  - `next(new Error())`/`(any string)`/`({status: 400})`: Enter the
    errored state, switch to `handle_error`, and pass values to error-
    handling middlewares.
