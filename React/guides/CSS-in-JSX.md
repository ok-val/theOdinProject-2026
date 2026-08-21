# Declaring CSS and other objects in JSX using double curlies

In addition to passing strings (string objects) in JSX using single
curlies, I could also pass a JS object in JSX using **double curlies**.

Passing objects:

```jsx
export default function Greeting() {
  return (
    <ul
      style={{
        backgroundColor: 'black',
        color: 'pink'
      }}
    >
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```

Whereas the outer curlies denotes JS content, the inner curlies denotes
that the content is a JS object.

Again, the CSS style declaration needs to align with DOM property names
as well.

Or, I could separate the object outside of the return clause and simply
use {single curles} with the dot notation to pass vars.

```jsx
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://react.dev/images/docs/scientists/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```
