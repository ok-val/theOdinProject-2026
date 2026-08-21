# React components

## What are React components?

Each React component is a UI interface that is packed as a reusable
primitive.

The structure of React requires that you create the pieces of
your UI as a React component, then deploy them in the component `App`
---the entry point of all other components.

## Creating a component

Here's how a React component is written:

```jsx
function Greeting() {
  return <h1>Hello World</h1>;
}
```

> [!important] Reacting component naming
>
> React components' names must be PascalCase, otherwise they wouldn't
> work as expected. This is because React can differentiate between
> normal HTML and React components.

```jsx
function App() {
  return (
    <>
      <Greeting />
      <p>I'm Val</p>
    </>
  );
}
```

## Where components live?

Each components may live in its own file!
