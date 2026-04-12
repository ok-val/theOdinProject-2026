---
doc-type: wiki-page
sources: https://mattbrictson.com/blog/css-normalize-and-reset
---
## Why do we need them?

Beginners write CSS without a framework. 
They would be using the **default stylesheets**.

But why do we really need them?
~={green}They provide a consistent, predictable starting point.=~
~={blue}Each browser ships with different default stylesheets=~ (different font sizes, weights, etc.). Because they assume different things, they are considered *opinionated*. 
If unattended, these small differences can cause undesired surprises.


## How do we make them?

There are three approaches:
* Normalize the CSS
* Reset it
* A combination of both

| Approach      | Philosophy                                                                    | What it does                 |
| ------------- | ----------------------------------------------------------------------------- | ---------------------------- |
| **Reset**     | “Erase everything so I can build from scratch.”                               | Removes all defaults         |
| **Normalize** | “Keep defaults but make them consistent.”                                     | Harmonizes across browsers   |
| **Hybrid**    | “Keep the good defaults, remove the bad defaults, add modern best practices.” | Curates defaults + adds enha |

### Normalize

Fix what's inconsistent, retain what's consistent or already helpful. 
Simply make development for predictable across browsers.
See Nicolas Gallagher's [normalize.css](https://github.com/necolas/normalize.css).

### Reset 

Removes most things (including useful ones). 
Hard-reset for all size differences of headers, ul, display styles, etc.

### Hybrid

Address the inconsistencies, retain some consistencies, add QoL features.
These are considered more **opinionated**, but opted for modern dev work.
Tailwind CSS is a popular example.


## Matt Bricton's Recommendations

Most resets do too much. They are considered the most austere treatment.
The author recommend using [modern-normalize](https://github.com/sindresorhus/modern-normalize) framework.

This library does the traditional job of a normalize stylesheet + some opinionated features. Here's what it does differently: 
* Disables the `-webkit-text-size-adjust` behavior when rotating the screen.
* Sets `system-ui` as the default font (with fallbacks) which a few people prefer to Times New Roman (what's wrong with TNR you plebes!)
* Ensures that *form inputs* and *buttons* match the document's fonts and font-size (`font-family: inherit` and `font-size: 100%`)
* Removes the default margin on the body element (nice, I guess)
* Globally applies `box-sizing: border-box`. Definite yay here!

### How to install?

1. **Use npm (`node package manager`)**

``` shell
npm install modern-normalize
```

This approach is most helpful if I'm already using a build tool that can import from `node_modules`, such as Vite, Webpack, etc. (I don't know what these are yet).

2. **Use CDN links (Content Delivery Network links)**

That's simply a mouthful for linking the .css file internally or externally.  

``` html
<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/modern-normalize/modern-normalize.css">
```

### Opinionation on top 

Here's the piece of opinionated tweaks Matt Brictson uses.
I personally disagree on a few points (coming from a graphic background).

```css
:root {
  line-height: 1.5; /* No such thing as universal leading bruv */
}

h1, h2, h3, h4, h5, figure, p, ol, ul {
  margin: 0;
}

ol[role="list"], ul[role="list"] {
  list-style: none;
  padding-inline: 0;
}

h1, h2, h3, h4, h5 {
  font-size: inherit;
  font-weight: inherit;
}

img {
  display: block;
  max-inline-size: 100%;
  /* Ensure that large images shrink to fit in containers, not overflowing and causing layout problems */
}
```


## How to choose a CSS framework?

Three questions to ask:

1. **Would it save you time by reducing repetitive styling in the long run?**
   CSS framework is best introduced early than late. Decide upfront.
2. **How much control do you need?** 
   If not much, then (here) have a framework!
   If much, then write it yourself. 
3. **Could you take advantage of the default browser style?**
   Embrace and let go...
   Audience, behold my audacity (or laziness).

