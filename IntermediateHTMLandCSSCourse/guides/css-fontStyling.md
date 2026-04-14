### Semantic HTML - Be fastidious with semantic tagging

Use discipline for appropriate HTML element tagging: 

- `<header>` for page or section headers
- `<nav>` for navigation
- `<main>` for primary content
- `<section>` for thematic grouping
- `<article>` for self‑contained content
- `<aside>` for tangential info
- `<figure>` **/** `<figcaption>` for media with captions
- `<em>`, `<strong>`, `<abbr>`, `<cite>`, etc. for text meaning

For example, do not use `<em>` to italicize a title.

This is important because it makes the website for accessible for users who requires screen readers to navigate the web. 

### Typographic adjustments in CSS

* `letter-spacing`: Adding universal tracking to strings
* `text-transform`: Transform the letter of the texts
* `text-shadow`: Adding shadow to text; use sparingly
* `ellipsis`: involves other property to correctly render a normal overflow. Below is how it is usually constructed.

```css
.overflowing {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### Dynamic typography

For dynamically rendering font sizes based on viewport width or height and other *clamping techniques*: 

**Font-size clamping:**

``` css
html {
  font-size: clamp(1rem, 0.75rem + 1.5vw, 2rem);
}
```

**Paragraph line clamping:**

```css
/*❌*/
article {
  max-inline-size: 700px;
}
```

```css
/*✅*/
article {
  max-inline-size: 66ch;
}
```

**Relative line-height (tracking):**

Use a unit-less declaration to as a shortcut for `calc(font-size)`:

```css
line-height: 1.5;
```

## Useful links 

Best practices for using fonts for performance: [Best practices for fonts  |  Articles  |  web.dev](https://web.dev/articles/font-best-practices)
Typesetting considerations: [Typography  |  web.dev](https://web.dev/learn/design/typography)