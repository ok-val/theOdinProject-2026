# The useMemo hook

Source:

- https://www.theodinproject.com/lessons/node-path-react-new-refs-and-memoization

> Premature optimization is the root of all evil – The Art of Computer
> Programming by Donald Knuth

`useMemo` is React hook that lets me store or cache a result of an
expensive calcuation for later use inside a component without having to
recalculate every time the component runs.

`useCallback` is the specialized cousin of `useMemo` that stores ONLY
functions. Technically, it's syntactic sugar to reduce arrow functions.

> `useMemo` to cache ANY value type, `useCallback` ONLY for functions.

`useMemo`, like `useEffect`, takes a callback and a dependency array.
`useMemo` is runs during the rendering stage.

So when does the expensive calculation get recalculated? Only when the
dependencies of the `useMemo` hook change.

Here's how that gets implemented:

```jsx
import { useMemo } from 'react';

function Cart({ products }) {
  const totalPrice = useMemo(() => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }, [products]);
}
```

In which:

- `useMemo` will run the callback on mount;
- On subsequent re-render, it would only re-run if `products` is updated
  and the parent component is not updated;
- Otherwise, it will return the cached value from its last run.

## `memo`: useMemo alone cannot prevent parent-triggered re-rendering

> `useMemo` cannot prevent the component from updating if the parent
> component is updated because a component will re-render itself when
> its parent re-renders.

To address this issue, React provides a `memo wrapper function` to wrap
our component with to prevent said component from updating even if the
parent re-renders.

## Implementing memoization

1. _(Optional; only required for components with re-rendering parents)_
   **Wrap the expensive component in a `memo wrapper function`**

2. **Wrap the state setter function with `useMemo`**

```jsx
import { useState, useMemo, useCallback, memo } from 'react';

// 1. Wrap the expensive component in a `memo wrapper function`
const ButtonComponent = memo(({ children, onClick }) => {
  let i = 0;
  let j = 0;
  const ITERATION_COUNT = 10_000;
  while (i < ITERATION_COUNT) {
    while (j < ITERATION_COUNT) {
      j += 1;
    }
    i += 1;
    j = 0;
  }

  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
});

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick_og = () => {
    setCount((prevState) => prevState + 1);
  };

  // Here are a few memoization syntaxes:

  // 2. Wrap the user event function with `useMemo`
  const memorizedHandleClick_Mm = useMemo(() => handleClick_og(), []);
  const handleClic_kMm = useMemo(
    () => () => setCount((prevState) => prevState + 1),
    []
  );
  // or `useCallback`
  const memorizedHandleClick_Cb = useCallback(handleClick_og, []);
  const handleClick_Cb = useCallback(() => setCount(prev) => prev + 1, []);

  return (
    <div>
      <h1>{count}</h1>
      {/*
        ButtonComponent gets re-rendered every time state Count is
        updated (parent re-render trigger) if the component is not
        wrapped with a memo wrapper function.
      */}
      <ButtonComponent onClick={handleClick_Cb}>Click me!</ButtonComponent>
      {/*<ButtonComponent onClick={memorizedHandleClick}>Click me!</ButtonComponent>*/}
    </div>
  );
}
```
