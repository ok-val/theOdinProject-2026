---
doc-type: wiki-page
sources: https://css-tricks.com/complete-guide-css-grid-layout/
---
## What is grid?

> [!definition] Grid layout mode
> **Grid is a layout mode that uses a two-dimensional grid-based layout system.**
> Grid allows elements to be positioned into rows and columns. 
> Grid layout has children that can overlap and layer. Creating a dynamic grid is easier this way.

With [[flexbox]], controlling the number of rows and columns are harder because there isn't a dedicated control for that and one has to rely on `flex-wrap`. 

## Key terms

**Grid container** is the parent element that has been set to use grid display mode. It is the direct parent of all grid items.

**Grid items** are the direct children of the grid container. Grandchildren are not grid items.

**Grid lines** are the dividing lines that make the structure of the grid. Vertical grid lines are column grid lines; horizontal grid lines are row grid lines. 

![](https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-line.svg)

**Grid track** are the space between two adjacent grid lines. They traverse vertically (column tracks level between column lines) or horizontally (row tracks travel between row lines).

![](https://css-tricks.com/wp-content/uploads/2021/08/terms-grid-track.svg)

**Grid area** is the squared space enclosed by the grid lines. 

![](https://css-tricks.com/wp-content/uploads/2018/11/terms-grid-area.svg)

**Grid cell** is the a single unit of a grid layout. 



## grid-template-*

`grid-template-columns` and `grid-template-rows` are the two defining properties of a grid layout system. 

Beyond setting the track sizes, here are a few other things that I can do with it.

### Track-sizing with repeat() function

For definitions are contains repeating parts, I can just the `repeat()` CSS function. 

```css 
.container {
  grid-template-columns: repeat(3, 20px [col-start]);
}
```

### Naming grid lines

```css
/* Here's how to implement line names */
/* Line names are spec-ed BETWEEN track-sizes and can have multiple names */
.container {
  grid-template-columns: [first line1] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
}
```

### grid-template shorthand

`grid-template` is a shorthand for `grid-template-rows`, `grid-template-columns`, and `grid-template-area` in a single declaration.

```css 
.container {
  grid-template:
    [row1-start] "header header header" 25px [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;
}
```

Which is the equivalent of: 

```css
.container {
  grid-template-rows: [row1-start] 25px [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;
  grid-template-areas: 
    "header header header" 
    "footer footer footer";
}
```

It essential gives a 2x3 grid.

### grid-template-areas

Defines a grid template by referencing the names of the grid area set by the property `grid-area`. The value for the name could be any arbitrary strings. 

A period would declare an empty cell. 

Here is the syntax for this property: 

```css 
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}

.container {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  /* Perhaps auto gives us the ability to size rows manually? */
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
```


