## Types of viewport units

As of 2015, there are now 4 viewport (vp) units that one can use:
+ VWidth (`vw`): A percentage of the full vp width. 10vw will result to 10% of the current vp width. This is *similar to `rem` because the unit is relative to the max vp* width, while % is closer to `em` for being parent-bound. 
+ VHeight (`vh`): Same concept but for height.
+ VMin (`vmin`): A percentage of the viewport width or height, *whichever is smaller*. This means that 10vmin will resolve to 10% of the width or height (whichever smaller).
+ VMax (`vmax`): Same concept but for *whichever is larger*.


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
We should contain this direct proportionality to just *0.5–1 vw (or vh)* and *introduce some degree of invariance* (y-intercept if you will) using the `calc()` method:

```css
body {
  /*font grows 1px for every 100px of viewport width*/ 
  font-size: calc(16px + 1vw);
  /*leading grows along with font,*/ 
  /*with an additional 0.1em + 0.5px per 100px of the viewport*/ 
  line-height: calc(1.1em + 0.5vw);
}
```

## More tips and tricks on full-height layouts, hero images, and sticky footers

See the recommended resource of the module: [Fun with Viewport Units | CSS-Tricks](https://css-tricks.com/fun-viewport-units/)

