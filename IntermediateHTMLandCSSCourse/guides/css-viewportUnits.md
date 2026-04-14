---
doc-type: wiki-page
sources: https://css-tricks.com/fun-viewport-units/
---
## Types of viewport units

As of 2015, there are now 4 viewport (vp) units that one can use:

|Unit|Meaning|Resolves To|Useful When|Notes|
|---|---|---|---|---|
|`vw` (VWidth)|Percentage of the **viewport width**|`1vw = 1%` of current viewport width|Width‑responsive typography, horizontal layouts|Behaves like `rem` in that it’s relative to a _global_ root (the viewport), while `%` is parent‑bound like `em`.|
|`vh` (VHeight)|Percentage of the **viewport height**|`1vh = 1%` of current viewport height|Full‑height sections, hero blocks|Same concept as `vw`, but vertical.|
|`vmin`|Percentage of the **smaller** viewport dimension|`1vmin = 1%` of `min(width, height)`|Ensuring elements scale without overflowing in narrow orientations|Great for maintaining consistent sizing across landscape/portrait.|
|`vmax`|Percentage of the **larger** viewport dimension|`1vmax = 1%` of `max(width, height)`|Large, dramatic scaling that fills the longest side|Opposite of `vmin`; can cause oversizing on small screens if not careful.|

## How to NOT use viewport units

```css
body {
	font-size: 3vw;
	margin:0.5em;
}

/*This means that for every 100px of the viewport width, font-size increase by 3px. That's simply too dramatic!*/
```

## How to use viewport units

So what should we do if we want some dynamic adjustment? 
We should lessen this direct proportionality to just *0.5–1 vw (or vh)* and *introduce some degree of invariance* (y-intercept if you will) using the `calc()` method:

```css
body {
  /*font grows 1px for every 100px of viewport width*/ 
  font-size: calc(16px + 1vw);
  /*leading grows along with font,*/ 
  /*with an additional 0.1em + 0.5px per 100px of the viewport*/ 
  line-height: calc(1.1em + 0.5vw);
}
```


The article provides a few advanced tutorials for fluid typography using Sass mixins.
Make sure to revisit them some other time. 


## Full-height layouts, hero images, and sticky footers

To achieve **full-height layout** for a typical grid layout where the gridded body contains the header, main, and footer.
- [p] Simply declare body `width` to be 100vh to make it always fill the page (always showing header, main, and footer)
- [p] Make sure to use `overflow` on main's content to allow overflow

To achieve a **sticky footer**, simply switch from `height` to `min-height` (remove upper limit). This gives a more natural scrolling experience.

To create full-screen sections and hero images, consider using max-height (remove lower limit) with some value of vh (>50vh). 


## Fluid aspect ratios

I can constrain aspect ratio of element using `calc()`. This can be useful for videos.

```css
/* full-width * aspect-ratio */
.full-width {
  width: 100vw;
  height: calc(100vw * (9/16));
}
```

I can further constrain upper dimension limits using `max-height` and `max-width`.

```css
/* The height/width ratio for our video */ 
body {
  --ratio: 360 / 640;
}

/* Full-width video */
.full-width {
  width: 100vw; // we know it will be full-width
  height: calc(100vw * var(--ratio));
}

/* Constrained */
.max-width {
  --container-width: 30em;
  
  height: calc(100vw * var(--ratio));
  max-height: calc(var(--container-width) * var(--ratio));

  width: 100%;
  max-width: var(--container-width);  
}
```


- [I] Visit the tutorial source for more tricks.