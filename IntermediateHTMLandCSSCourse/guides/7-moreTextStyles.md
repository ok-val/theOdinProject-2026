## Edge case: What if users do not have certain fonts installed?

### System font stack

It's a good idea to provide a *font stack* using the `font-family` property: 

```css
body {
  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```

The system will go through each of the these fonts in the registry and pick the first one that it finds. This method creates a safety net.

### Web fonts

Web fonts are imported via APIs and offer a vast variety of accessible, exciting fonts that users may not have. I have used *Google Fonts* which is super useful.

Here are some other font libraries to use: 

+ [Font Library](https://fontlibrary.org/)
+ [Font Bunny](https://fonts.bunny.net/)
+ [Google Fonts](https://fonts.google.com/)

This is called using some boilerplates: 

```html
/*To be appended to HTML tag*/
/*Further instructions in the API docs*/
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```

or by using the `@import` tag:

```css
/*Drop this at the top of a CSS file*/
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
```


> [!warning] Some important considerations when using API fonts
> *Some country may restrict the use of certain APIs.* For example, using Google Fonts violates the European GDPR, making the API unretrievable from certain European countries.
> 
> To circumvent this issue, we can *self-host the font*.


### Self-hosted fonts

```css
@font-face {
  font-family: my-cool-font;
  src: url(../fonts/the-font-file.woff);
}

h1 {
  font-family: my-cool-font, sans-serif;
}
```


> [!hint] A general rule of thumb
> A good rule is when you either use API or self-hosted fonts, make sure to always use system font stacking to ensure safe, predictable fallback.

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

