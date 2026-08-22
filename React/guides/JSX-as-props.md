## Passing JSX as children

IN ADDITION to strings, objects, and functions, I could also add JSX
component as a prop to another JSX component.

This is for when I need to nest certain tag in other parent tag,
such as wrapping this `img` with `div`.

```html
<div>
  <img />
</div>
```

I could wrap JSX very similarly!

```jsx
<Card>
  <Avatar />
</Card>
```

Here's how it would be done:

```jsx
function Avatar(props) {
  return <img {...props} />;
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Profile() {
  return (
    <>
      <Card>
        <Avatar />
      </Card>
    </>
  );
}
```

As the content of `<Avatar>` will return the `<img>` element, that
element then gets passed into `<Card>` to be placed inside a `<div>`.
This way, `<Card>` doesn't have to know anything about what specifically
is being rendered inside of it. It only has to place whatever is
returned as the children.
