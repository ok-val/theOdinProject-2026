---
doc-type: wiki-page
sources: |-
  https://web.dev/learn/design/typography,
  https://web.dev/articles/min-max-clamp,
  https://www.smashingmagazine.com/2016/05/fluid-typography/,
  https://webtypography.net/2.1.2#:%7E:text=%E2%80%9CAnything%20from%2045%20to%2075,is%2040%20to%2050%20characters.%E2%80%9D,
---
## Choosing a comfortable measure

This framework was extracted from [this guide](https://webtypography.net/2.1.2#:%7E:text=%E2%80%9CAnything%20from%2045%20to%2075,is%2040%20to%2050%20characters.%E2%80%9D) by Robert Bringhurst. 

> [!definition] What is a Measure? 
> The **measure** is the number characters *in a single line* of a column of text. 

For single-column layout, 45--75 char measure is recommended. The ideal number is 66.
For multiple-column layout, 40--50 char measure is recommended.

From a typographic standpoint, **setting ems** (or rems) is recommended as this allows the user to adjust text size for viewing comfort without guestimating using percentage. 

A better approach these days is using the CSS unit (`ch`) -- 0-width character advance. Here's the snippet for that:

```css
p { /* for single-column layout */
	width: clamp(45ch, 50%, 75ch);
}
```

## Fluid typography

From this [article](https://www.smashingmagazine.com/2016/05/fluid-typography/) by Mike Riethmueller on fluid typography. 
~={yellow}:LiBookmarkPlus: Revisit recommended.=~

Fluid typography uses viewport units (more specifically `vw`). 
Viewport units are percentage of the browser's viewport dimension. 

There are several considerations for fluid typography.

### Controlling viewport units to get min and max font size

To enable fluid typography, clamp the font-size. Here's the snippet for that: 

```css
p {
	font-size: clamp(1.5rem, 5vw, 3rem);
}
```


### Controlling the rate of change of font size

Mike recommended a mathematical function combining the use of `vw` with degree of invariance using a few specific knobs. Here's the snippet for that:

```css
calc(16px + (24-16)*(100vw - 400px)/(800 - 400));
```

![[Pasted image 20260419214919.png]]

The article presents some very helpful insights for how to design to various screen sizes.

The article also presents a demo for fluid vertical rhythm. Although some of the language surpasses my own understanding, it would be helpful to revisit in the future.
~={yellow}:LiBookmarkPlus: Revisit recommended.=~


