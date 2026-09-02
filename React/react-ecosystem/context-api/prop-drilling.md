# Prop Drilling

Source:

- https://react.dev/learn/passing-data-deeply-with-context
- https://kentcdodds.com/blog/prop-drilling

Prop drilling is a case of lifting states up or down or passing states
that traverses deeply into the UI tree. For example, imagine having this
highly compositioned code:

```jsx
function Toggle() {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn((o) => !o);
  return <Switch on={on} onToggle={toggle} />;
}

function Switch({ on, onToggle }) {
  return (
    <div>
      <SwitchMessage on={on} />
      <SwitchButton onToggle={onToggle} />
    </div>
  );
}

function SwitchMessage({ on }) {
  return <div>The button is {on ? 'on' : 'off'}</div>;
}

function SwitchButton({ onToggle }) {
  return <button onClick={onToggle}>Toggle</button>;
}
```

Prop drilling keeps prop tracing explicit as the visual cues are present
at all times, however, at the cost of... tracing it explicitly.

## The problem with passing props or lifting states up

This is helpful and all, but what happens when we need to pass some
states to some great-great-great-great-grandchild component, while no
middle relatives need that component?

We need a way to teleport states into deeply nested UI trees.
