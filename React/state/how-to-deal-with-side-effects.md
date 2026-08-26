# How to deal with side effects

There are times when I have to work with React components that interact
with data outside themselves. These data could be querying data from a
server to fetch a message and show it to the user.

**This interaction with the outside world is called side-effect**.

Effects allows data to be synced across components as necessary.

Similar to the hook `useState`, React offers `useEffect` to use effects
in my components.

## useEffect hook

`useEffect` is a React hook that, for every render, run some code as a
result of some state being changed or unchanged.

The hook takes two params:

1. A callback function to be executed
2. An optional array of state(s) that any update to which would trigger
   the callback to exec

```jsx
useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
  // The array is constant => the callback never run after first mount
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);
```

## effect clean up return

That callback function returns clean up function that gets run
**BEFORE** every time the callback gets run (if it does).

```jsx
useEffect(
  () => {
    console.log('main effect');
    return () => {
      // cleanup function on unmounting or re-running effect
      console.log('cleanup runs before main effect');
    };
  }
  // optional dependency array
  // [/* no dependency array means useEffect exec every render */]
);
```

## I may not need effects

Effect is a great feature, but abusing it can cause my code to bloat
performance-wise.

> > > Effects should preferrably deal with server, API, or DOM. < < <

Here are a few situations where `useEffect` might not be needed:

- **Do not use effects for simple changes in props:** Let the props and
  rerendering do the work

- **Do not use effects for components with native event handlers:**
  Whatever events could be declared natively by the HTML element (i.e.,
  not via adding event listener with JS), should not use effect (since
  you'll have to add AND remove the listener). This direct manipulation
  is unneccessary and should be preserved for elements (usually for
  displaying purpose) that do not have a native event handler.

- **Do not use effects for sharing state**: Lift the state up instead.
