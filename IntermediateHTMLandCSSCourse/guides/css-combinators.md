There are a lot of advanced selectors. We choose the ones that serve our purpose and move on.

## Child & sibling combinators

These combinators work similarly to Emmet syntax. 

Given a following html: 

```html
<main class="parent">
  <div class="child group1">
    <div class="grand-child group1"></div>
  </div>
  <div class="child group2">
    <div class="grand-child group2"></div>
  </div>
  <div class="child group3">
    <div class="grand-child group3"></div>
  </div>
</main>
```

Use ` ` (space)---the descendant combinator---to select all children and grandchildren:

```css
main div {
	/* Our cool CSS */
}
```

Use `>` to select a child (immediate, not all):

```css
/* The divs with the class "child" will get selected by this */
main > div {
  /* Our cool CSS */
}

/* The divs with the class "grand-child" will get selected by this */
main > div > div {
  /* More cool CSS */
}
```

Use `+` to select an adjacent sibling combinator (Positional selection)

```css
/* Only the div with the classes "child group2" will get selected by this */
.group1 + div {
  /* Our cool CSS */
}

/* Only the div with the classes "child group3" will get selected by this */
.group1 + div + div {
  /* More cool CSS */
}
```

Use `~` to select a general sibling (Select all siblings)

```css
/* All of .group1's div siblings - in this case the 2nd and 3rd .child divs, will get selected by this */
.group1 ~ div {
  /* Our cool CSS */
}
```



