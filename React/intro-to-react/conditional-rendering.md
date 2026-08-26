## Conditional rendering

Continuing using the example from [[iterative-rendering.md]], here's how
conditional rendering looks like:

```jsx
function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        // 1. Use the ternary operator
        return animal.startsWith('L') ? (
          <li key={animal}>{animal}</li>
        ) : null; // return null indicates: No element to be rendered

        // 2. Use the logical AND operator
        return animal.startsWith('L') && <li key={animal}>{animal}</li>;
        // (short circuit) return false if condition returns STRICTLY false
        // NOTE: condition MUST EXPLICITLY RETURN A BOOLEAN (can't be falsy)
        // This means that this following return will result in a 0 being rendered
        return animal.length && <li key={animal}>{animal}</li>;
        // So ALWAYS use an expression that would return a BOOLEAN
        return animal.length > 0 && <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function App() {
  const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];
  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}
```

### Ternary operator and Logical AND as alternative for if...else blocks

For more legibility, here's how an `if...else` block would look like for
conditional rendering:

```jsx
function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function App() {
  const animals = [];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}
```

However, I cannot use `if...else` blocks inside JSX.

The alternative syntax is to use ternary operators:

```jsx
function List(props) {
  return (
    <>
      {!props.animals ? (
        <div>Loading...</div>
      ) : prop.animals.length === 0 ? (
        <div>There are no animals in the list!</div>
      ) : (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      )}
    </>
  );
}
```

Or, using the logical AND would look even more compact, but using it
requires you to be more explicit about the input conditions to return
strictly Booleans to work:

```jsx
function List(props) {
  return (
    <>
      {!props.animals && <div>Loading...</div>}
      {props.animals && props.animals.length === 0 && (
        <div>There are no animals in the list!</div>
      )}
      {props.animals && props.animals.length > 0 && (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      )}
    </>
  );
}
```
