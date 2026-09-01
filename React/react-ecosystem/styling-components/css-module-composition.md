# CSS modules composition

CSS moduels also allow me to combine multiple classes using the
**compose** keyword.

Consider a normal class below:

```css
.className {
  color: green;
}
```

I could extend this class in other classes like so:

```css
.classExt {
  background-color: blue;
}

.className {
  composes: classExt;
  color: green;
}
```

Or I could also compose using `classExt` if it's from another file:

```css
.className {
  composes: classExt from './classExt.css';
  color: green;
}
```

## Real-time CSS composition for React component

```jsx
import styles from './Button.module.css';

export default function Button({ type = 'primary', label = 'Button' }) {
  // Square braq notation might be preferred for computing string vars
  return <button className={styles[type]}>{label}</button>;
}
```
