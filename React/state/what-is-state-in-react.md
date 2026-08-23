# State in React

In programming, a state is current snapshot of a program or part of it
that makes up the overall program state.

States are mediated by Data as data changes states and thus controls
what a program is doing at different states.

React uses changes in props and states to dynamically render the DOM
using diffed virtual DOMs. For this to happen, each React component
needs an memory about itself. **State is thus a component's memory.**

> [!important] React reconciliation algo
>
> Whenever a state is changed, it triggers a rerendering process.
> This process generates a new virtual DOM to compare with the current
> virtual DOM. The algo then diffs the two to return the minimal set of
> changes needed to update the actual DOM.

## Rerendering under-the-hood

See [['../practice/intro-to-states.jsx']] for the example:

Whenever `setBackgroundColor()` is called, the `ButtonFrenzy` component
is rerendered. In being declared by `useState()`, `setBackgroundColor()`
is subscribed to by `useState()`, which triggers the rendering.

`useState()` also provides the subsequent values for `backgroundColor`
of subsequent calls by encapsulating that value under-the-hood.
