# State Reducers

Source:

- https://react.dev/learn/extracting-state-logic-into-a-reducer

## What are reducers

> [!defintion] Reducers are PURE FUNCTIONS that take a previous state
> and an action to return a new state.
>
> An action is an object with a type property that describes what a user
> interaction did. This object can be inlcude other properties that help
> the reducer produce the new state.
>
> The state in this case is the data we are aiming to update.

## Implementing a reducer

**Combine a reducer and useReducer hook.**

> > > REDUCER MUST BE PURE FUNCTIONS. No logging, no side-effects.

Here's how a reducer function may look like:

```jsx
function reducer(state, action) {
  switch (action.type) {
    case 'incremented_count': {
      return { count: state.count + 1 };
    }
    case 'decremented_count': {
      return { count: state.count - 1 };
    }
    case 'set_count': {
      return { count: action.value };
    }
    // Good practice to catch unknown actions
    default: {
      throw new Error('unknown action: ' + action.type);
    }
  }
}
```

Here's `useReducer` hook in action:

```jsx
const [state, dispatch] = useReducer(reducer, { count: 0 });

function handleClick() {
  dispatch({ type: 'incremented_count' });
}
```

The `useReducer` hook receives an action object as param, with
properties for our need, which is passed into the `reducer function`.

`useReducer` is the equivalent to and works similarly to the setter
function of `useState` in that:

- React only updates the state in the next render after call `dispatch`;
- It can only be called at the top level of the component and may not be
  called inside a loops or conditions.
- In using `dispatch` in Effect, the function has a stable identify, so
  it is omitted from Effect dependencies.

## Building my own reducer :D

```jsx
import { useState } from 'react';

export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);
  const dispatch = (action) => {
    const res = reducer(state, action);
    return setState(() => res);
  };
  return [state, dispatch];
}
```

## When to use reducers

Reducers are helpful when there are multiple components setting the same
states using different functional branches.

Only if the tradeoffs have more payoffs than costs. Too simple a reducer
and it may just hog space. Too complex a reducer and it would encumber
readibility and maintenance.
