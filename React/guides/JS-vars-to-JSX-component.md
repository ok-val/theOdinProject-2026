# Use JS vars in JSX with Curly Braces

Source: https://react.dev/learn/javascript-in-jsx-with-curly-braces

The new extended part of JSX is that part that needs some syntactic
attention.

## How to declare string and numbers

1. Declare strings with double quotes
2. Declare number with curlies

To pass a string attribute (as in HTML string attribute) in JSX, I have
to use "double quote". For numbers, use {single curlies}.

```jsx
export default function Avatar() {
  return (
    <img
      className="avatar"
      src="https://react.dev/images/docs/scientists/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}
```

## Dynamically passing JS code inside JSX

To dynamically pass attributes, I have to use {curly braces}.
react.dev frames this as a window into the JS world.
Here are two use cases for it.

**A: Specify string attributes**

```jsx
export default function Avatar() {
  const avatarSrc = 'https://react.dev/images/docs/scientists/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return <img className="avatar" src={avatarSrc} alt={description} />;
}
```

**B: Changing HTML values**

```jsx
export default function Greeting() {
  const name = 'Ori Orio';
  return <h1>{name} says hello!</h1>;
}
```

In short, there are two ways to use JS-like curlies inside JSX:

1. To pass vars from a native JS environment to JSX attributes;
2. To pass vars to JSX values.
