# Nested routes, outlets and dynamic segments

React router could also help with rendering just part of a page
dynamically.

These are two methods to dynamically render content of a page.

- Nested routes + outlet method is best when multiple pages to share the
  same overarching layout or common parent component. You can
  dynamically swap the child components using an Outlet object. For
  example, a user dashboard where the side stays constant, but different
  config tabs like settings or billings changes a subarea on that page.

- Dynamic segment allows rendering different using the same component
  structure, but populate it with different data. Instead of hardcoding
  routes, use a placeholder (or dynamic segment) to capture that part of
  the URL as a variable. For example, different product pages should
  have the same layout structure but different inner contents.

In real-world applications, they are often combined because they deliver
different experiences. For instance, use dynamic segments to display
different products will have the same page layout and structure and then
use nested routes + outlet to show different subtabs for that specific
product.

## Nested routes use outlet and outlet context

Nested routes get laid out outside the tree in the `main.jsx` component.
The parent component would contain an `Outlet` object to render its
child components.

Outlets inherently has a `context` prop build in. To extract from this
`context`, call `useOutletContext()`.

```jsx
// Parent route
function Parent() {
  const [count, setCount] = React.useState(0);
  return <Outlet context={[count, setCount]} />;
}
```

```jsx
// Child route
import { useOutletContext } from 'react-router';

function Child() {
  const [count, setCount] = useOutletContext();
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>{count}</button>;
}
```
