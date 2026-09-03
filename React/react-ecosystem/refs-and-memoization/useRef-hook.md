# The useRef hook

Source:

- https://www.theodinproject.com/lessons/node-path-react-new-refs-and-memoization

`useRef` is a React hook that serves as an alternative to states but
instead lets me manage a value that's not needed for rendering.

> It is useful when I want a component to remember some information
> internally **without having to trigger new renders**.

Often, they are used when performing imperative actions or accessing
specific elements in the DOM. Refs' values are persistant throughout the
component's lifecycle, meaning that they will not be destroyed everytime
a component re-renders.

## Rules of using refs

1. Don't write/read `ref.current` during rendering (b/c the components
   become impure for having side-effects).
2. Do write/read `ref.current` in event handlers or effects

## DOM manipulation use case

Source:

- https://react.dev/learn/manipulating-the-dom-with-refs

Consider having to focus on a button every time a page loads. Here's how
`useRef` would be implemented for that:

```jsx
import { useRef, useEffect } from 'react';

function ButtonAutoFocused() {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return <button ref={buttonRef}>Click!</button>;
}
```

In which:

1. `useRef(null)` returns an object with a property called `current`.
   The `current` object's value is set to `null` which serves as an
   initial value that, like `useState(initialValue)`, gets ignored in
   subsequent renders.

2. After the component's initial render, `useEffect` fires (only once on
   mount) to call the `focus()` on `buttonRef`.

3. `buttonRef`, being attached to the returned button element fires
   `focus()` as a result.

> In short, DOM manipulations are considered side effects (thus
> `useEffect`) that take place after rendering or as a result of
> components being rendered.

Unlike `useState` which uses an immutable state to trigger re-renders
when updated, `useRef` creates a mutable reference, which does not
trigger re-renders.

Other DOM manipulation use cases include:

- Scroll to a specifc section of the page
- Measure dimensions of an element
- Triggering animations
