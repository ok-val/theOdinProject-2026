---
doc-type: wiki-page
sources: https://www.joshwcomeau.com/css/custom-css-reset/
---
Josh Comeau had been using Eric Meyer's [CSS reset](https://meyerweb.com/eric/tools/css/reset). 
Like others, resets are considered unopinionated in terms of cosmetics.
The tutorial covers Josh's reset.


> [!warning] Applying reset to existing codebase late-stage
> Not recommended to apply resets late in to project, especially if the project has been published. Users will notice errors even if we don't.

## Josh Comeau's CSS reset

Here are the features:

```css
/* 1. Use a more-intuitive box-sizing model */
*, *::before, *::after {
  box-sizing: border-box;
}

/* 2. Remove default margin */
*:not(dialog) {
  margin: 0;
}

/* 3. Enable keyword animations */
@media (prefers-reduced-motion: no-preference) {
  html {
    interpolate-size: allow-keywords;
  }
}

body {
  /* 4. Increase line-height */
  line-height: 1.5;
  line-height: calc(1em + 0.5rem);
  /* Treat this using some smart variable (em or %) and constants (rem) */
  /* 5. Improve text rendering */
  -webkit-font-smoothing: antialiased;
}

/* 6. Improve media defaults */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* 7. Inherit fonts for form controls */
input, button, textarea, select {
  font: inherit;
}

/* 8. Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* 9. Improve line wrapping */
p {
  text-wrap: pretty;
}
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
}

/* 10. Create a root stacking context */
#root, #__next {
  isolation: isolate;
}
```


### Notes on this approach

**Item 2 on removing default margin:** Removes all default margins (because we enjoy that control). But except for dialog elements (let's preserve its `margin: auto` for convenience).  

**Item 5 on anti-aliasing:**  According to the article, this is most relevant on macOS. The legacy approach was *subpixel antialiasing*. But this was helpful with lower-DPI displays. With higher-DPI display, this antialiasing mode is no longer useful. 

Confusingly, macOS disabled subpixel antialiasing in 2018 for Mojave, but Safari and Chrome are still using subpixel antialiasing by default. Speculated to be a catch-all solution for backward compatibility. 

I prefer just *antialiasing* (without subpixel). It's a lighter, more veracious look. 

**Item 8 on overflow word wrapping:** By default, the algorithm looks for opportunities for 'soft-wrap', which is built in to the English dictionary. But for other languages, the text will overflow.

The solution is `overflow-wrap: break-word` is sort of indiscriminately break words, which inserts `<wbr>` wherever needed. 

But why is this not a hyphen (using `&shy;`)?
Yes, this can be done and would look more professional.
Use `hyphens: auto` for the job. However, if the hyphenations are not regulated here, it can run amok in narrow text columns.

