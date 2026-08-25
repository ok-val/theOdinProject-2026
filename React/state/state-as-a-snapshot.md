# State as a Snapshot

In React, rendering means that React is calling your component due to
some set changes in the component that triggers it.

All props, event handlers, and local vars were all calcualted using the
state at the time of the render. The updates are only delivered in the
actual component in the eminent component rerendering.

When React rerenders a component, it:

1. Uses vars from the current snapshot to calculate the new snapshot
2. Compare the new snapshot to the old one to figure out just the things
   that have changed
3. Deliver only those that have changed

## Again, state is your component's memory

As a component's memory, state lives in React, like an interactive photo
on a shelf.
