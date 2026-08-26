## Passing functions as props

In addition to passing strings and objects, I could also pass functions
to trigger from the returned component.

For example:

```jsx
function Button({ text = 'Click!', color = 'green', fontSize = 12, clickCb }) {
    const style = {
        color: color,
        fontSize: fontSize + 'px';
    }
    // returns an HTML element
    return <button onClick={clickCb} style={style}>{text}</button>
}

export default function App() {
    const callbackFn = () => {
        console.log('Hello');
    }

    return (
        // returns a React component
        <>
        <Button clickCb={callbackFn} fontSize={20} />
        </>
        // Also correct, but can be confusing...
        // <Button onClick={callbackFn} fontSize={20} /> (*)
    )
}
```

(*) Notice how the React component could take the HTML native `onClick`
attribute, but then gets passed as a JS object:

`{onClick: callbackFn, fontSize: 20}`
↓↓↓ which then gets passed to the actual HTML element
`<button onClick={onClick} style={style} />`

Thereupon, the cascading from destructuring would look like:

```jsx
function Button({ text = 'Click!', color = 'green', fontSize = 12, onClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'px'
  };
  return (
    <button onClick={onClick} style={buttonStyle}>
      {text}
    </button>
  );
}
```
