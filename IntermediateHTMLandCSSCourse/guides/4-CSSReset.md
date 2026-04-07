## Default Styles 

This is the style when no CSS is applied. This doesn't mean that the stylesheet is empty. It just contains the default arguments for rendering. 

Each browser has unique *user-agent stylessheet* so defaults could *look different on different browsers*. 

>When you add a button element onto a page, Chrome applies padding: 2px 6px 3px; – Firefox applies padding: 0 8px. 

The CSS declarations have higher precedence (similar to specificity) than the user-agent stylesheets so they overwrite the defaults. 

<br>

### Why do we need CSS resets?

Because (1) default styling varies across browsers and (2) to establish a consistent starting point for styling.

In other words, they provide a clean slate for devs to apply their styles without this default inconsistencies.

**A CSS reset would apply new padding to that element, so that all browsers would be consistent about what they apply.** It tries to achieve consistency through standardizing/controlling behaviors across browsers.

[Read more here](https://css-tricks.com/reboot-resets-reasoning/)


People would create custom resets to meet their own needs, so this is why CSS resets are considered opinionated.


**Meyer Reset:** This is a legacy artifact that was once prevalent. The following CSS is to be placed at the beginning of the stylesheet; essentially creating boilerplate codes.


```css
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
```
<br>

**Common lazy approach:** Some just went for the universal selector to do the trick. This is a blanket override. And it's problematic because some elements require paddings and margins by default (e.g., headers padding). 

```css
* {
  padding: 0;
  margin: 0;
}
```
<br>

## Normalize.css

**Normalize.css** offers a curated set of rules that achieve this consistency that doesn't zero everything out, keeps useful defaults, fixes cross-browser inconsistencies. 

It differentiates itself from all the CSS resets which are considered opinionated (i.e., biased, subjective) by today's standard.

