# Key for State

Normally, rendering list is where you would provide a key for every
iteration. The use of key is not limited to this use case.

I could provide a specific key for a specific component when I need to
update its state or creating a brand new instance for fresh state.

```jsx
function GamePage() {
  const [key, setKey] = useState(0);

  return <Game key={key} resetGame={() => setKey(key + 1)} />;
}
```

The component `GamePage` would have an enclosed key that would
increment `key++` every time the `resetGame()` is called, causing React
to see it as a brand new instance with fresh state.
