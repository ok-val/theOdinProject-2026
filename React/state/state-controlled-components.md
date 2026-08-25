# (Actively) Controlled components

How about built-in HTML components that actively control its own states,
such as `input`?

I can hook this component to React for more deeply bespoke features.
Update the value of the input on every change:

```jsx
function CustomInput() {
  const [value, setValue] = useState('');

  return (
    <input
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}
```
