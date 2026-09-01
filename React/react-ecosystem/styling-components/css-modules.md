# CSS modules

Source: https://blog.logrocket.com/css-vs-css-in-js/

## Intro

While regular CSS is the simplest way to style, its global scope makes
it difficult to apply and track style locally or across larger projects.

With CSS modules, CSS styles declarations are scoped locally,
eliminating the worry of conflicting class names.

Writing CSS modules requires CSS to be written inside JS.

> [!definition] A CSS module is a CSS file where all class names and
> animation names are scoped locally be default. CSS modules compile to
> a low-level interchange format called ICSS (Interoperable CSS) and are
> written like normal CSS files.

Here are some advantagous features:

- Compile individual CSS files into both CSS and JS-parsable data
- Apply styling using conditions, states, and effects;
- Lessen class name conflicts in larger projects, thereby making
  maintenance much more predictable;
- Compose CSS styles in real-time;
- Strict design token: Enforce certain design standards on you (as
  frameworks do);
- Synergize with component-based framworks

However, these come with setbacks:

- Initial learning curve of memorizing naming conventions
- Visual clutter to the file

## Using CSS

1. The CSS file must have the `.module.css` suffix
2. Import the CSS file as `styles`

```css
/* styles.module.css */
.className {
  color: green;
}
```

```jsx
import styles from './styles.module.css';

const HelloWorldDiv = () => {
  console.log(styles.className);
  return <div className={styles.className}>Hello world!</div>;
};

export default HelloWorldDiv;
```

## CSS Utility Frameworks

A CSS utility framework is a style system composed entirely of
low-level, single-purpose classes that map directly to individual CSS
properties, rather than pre-designed UI components. Simply put, it
allows me to write CSS for my UIs directly inside my HTML or JSX.

For example:

```html
<button class="btn--primary">Submit</button>
<!-- dedicated CSS code elsewhere -->
```

```html
<button class="bg-blue-600 hover:bg-blue-800">Submit</button>
<!-- No need to go anywhere -->
```

Tailwind CSS is one of the most popular CSS utility frameworks.
