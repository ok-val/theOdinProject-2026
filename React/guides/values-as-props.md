# Data Transfer in React

In React, data is transferred from parent to child components via
PROPS in a unidirectional way, meaning the transfers cascade to only
children of the parent component.

> [!important] The goal of React data transfering
>
> It is to Don't Repeat Yourself (DRY)!

Consider this following button which gets rendered multiple times
within the App component.

```jsx
function Button() {
  return <button>Click!</button>;
}

function DontButton() {
  return <button>Don't click</button>;
}

export default function App() {
  return (
    <>
      <Button />
      <DontButton />
      <Button />
    </>
  );
}
```

## Using Props in React

Creating buttons this way can be repetitive, which does not make the
best use of React. Let's see how props is used in this case:

```jsx
function Button(props) {
  const style = {
    backgroundColor: props.color,
    fontSize: props.fontSize + 'px'
  };
  return <button style={style}>{props.text}</button>;
}

export default function App() {
  return (
    <>
      <Button text="Click!" color="green" fontSize={12} />
      <Button text="Don't Click!" color="red" fontSize={20} />
      <Button text="Hmm..." color="yellow" fontSize={16} />
    </>
  );
}
```

When the XML Button is created this way, something happens in the
background that may cause the initial confusion about the origin of the
`props` object getting passed as the first position argument.

When I declare `<Button _attributes_>`, the attributes part gets bundled
into a multi-property object:

From JSX:
`text="Click!" color="green" fontSize={12}`
↓↓↓ Gets parsed into JS ↓↓↓
`{text: 'Click!', color: 'green', fontSize: 12}`

This object becomes the first position argument of the component, if
explicitly declared as the argument for that component.

`function Button({text: 'Click!', color: 'green', fontSize: 12})`
↓↓↓ Gets arbitrarily assigned: ↓↓↓
`function Button(props)`
↓↓↓ And can be destructured as: ↓↓↓
`function Button({text, color, fontSize})`

## Default prop values

And so, this destructuring technique leads to the ability to declare
default value for any of the destructured var.

```jsx
function Button({text: 'Click!', color: 'green', fontSize: 12}) {
  const style = {
    backgroundColor: color,
    fontSize: fontSize + 'px'
  };
  return <button style={style}>{text}</button>;
}

export default function App() {
  return (
    <>
      // Think of these Buttons as function calls, coated in XML
      <Button />
      <Button text="Don't Click!" color="red" />
      <Button text="Hmm..." color="yellow"/>
    </>
  );
}
```
