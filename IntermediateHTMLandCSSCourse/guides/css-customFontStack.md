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

This is called using some CDN (Content Delivery Network) links: 

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
> A good rule is when you either use API or self-hosted fonts, **make sure to always use system font stacking to ensure safe, predictable fallback.**



## Useful links 

Best practices for using fonts for performance: [Best practices for fonts  |  Articles  |  web.dev](https://web.dev/articles/font-best-practices)
Typesetting considerations: [Typography  |  web.dev](https://web.dev/learn/design/typography)

