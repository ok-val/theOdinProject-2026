## The problem with standard variables in React component

Source:

- https://kentcdodds.com/blog/usememo-and-usecallback

In JS, non-primitive data types like arrays and functions are compared
by their **memory references**, not their content.

If I was to declare:

```jsx
const bar = () => {};
const viz = [1, 2, 3];

// This is called REFERENTIAL EQUALITY
bar === () => {}; // false
viz === [1,2,3]; // false
```

When these vars go to work in React, React performs reference equality
on the vars (using `Object.is()`) to trigger a render.

As a result of non-primative data types being compared by their memory
references rather than content, the equality never returns true and
these vars, when used in a React Effect, would also fire the Effect
re-render.

```jsx
function Foo({ bar, baz }) {
  const options = { bar, baz };
  React.useEffect(() => {
    buzz(options);
  }, [options]); // we want this to re-run if bar or baz change
  return <div>foobar</div>;
}

function Blub() {
  return <Foo bar="bar value" baz={3} />;
}
```

In this example, `Blub` passes `options` down to `Foo`. And so the
references are never equivalent, causing extra renders every time. So
the solution for the current issue would be to destructure `options`.

```jsx
// option 1
function Foo({ bar, baz }) {
  React.useEffect(() => {
    const options = { bar, baz };
    buzz(options);
  }, [bar, baz]); // we want this to re-run if bar or baz change
  return <div>foobar</div>;
}
```

However, if `bar` and `baz` and also non-primitives, we run to the same
issue as before: They never return equality when compared.

The solution is that by wrapping `bar` and `baz`, containing, say, a
function and a list respectively, in `useCallback` and `useMemo`.

```jsx
function Foo({ bar, baz }) {
  React.useEffect(() => {
    const options = { bar, baz };
    buzz(options);
  }, [bar, baz]);
  return <div>foobar</div>;
}

function Blub() {
  // these memos get generated once on mount and they persist
  const bar = React.useCallback(() => {}, []);
  const baz = React.useMemo(() => [1, 2, 3], []);
  return <Foo bar={bar} baz={baz} />;
}
```
