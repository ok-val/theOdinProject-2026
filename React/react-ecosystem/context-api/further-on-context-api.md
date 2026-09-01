# Further about the Context API

## Why do we need Context API

The Context API in React is a feature that allows managing the global
states of app while bypassing the need to pass data through multiple
levels of components using props.

> It's like a wormhole for states and props.

In my `shopping-cart-project`, I had to pass a few context through
middle components that don't necessarily use the context Outlet context.

This is a _micro-managing pattern_ that compounds when the application
gets more complicated.

While it makes sense for smaller apps, we simply cannot solely rely on
just chain passing states via outlet context forever.

## Implementing Context API

There are three key elements in the Context API that I will annotate
here:

1. `createContext`: Creates the context, accepts any value which will be
   referred as the default value of that context. Returns a `Context`
   object that can be used to pass down data to targeted components.

2. `useContext`: Reads and consumes data from a Context object created
   by `createContext`, accepts the Context obejct as param. Use this
   hook inside our component on the retrieving end.

3. `ContextObject`: is a component that accepts a prop called `value`,
   which is the data that's being passed as the context. Prior to React
   19, `ContextObject.Provider` was used instewad of `ContextObject`.

## Drawbacks of Context API

- **Indiscriminately trigger render:** When a state is updated in a
  context, it can cause all components that are consuming that context
  to re-render. For this reason, remember to compartmentalize contexts.

- **Harder to follow:** Because context acts like wormholes, it can be
  hard to trace back where the context creation originates.
