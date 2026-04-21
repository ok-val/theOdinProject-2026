To understand how psd-class and psd-element address, we review the intent of CSS elements are class: 

> Elements carry semantic meaning `<div>`, `<p>`, etc.
> Classes carry stylistic or functional meaning `.subBtn`, `.delBtn` .
> In terms of specificity, classes (0,0,1,0) carries higher precedence than elements (0,0,0,1) alone.

**∴ It parallels that psd-elements target semantic-level adjustments, and psd-classes cover the stylistic/functional adjustment.**

Combinators are structural (or structural selectors) because by construction they select items based on *semantic relationships*.

## Pseudo-class (psd-class)

*Pseudo-classes* (single colon `:` ) targets state-based or structural elements that already exist inside the markup. 

`:hover`, `:focus`, `:active` are some state-based elements.

`:root`, `:first-child`, `:last-child`, or `:nth-child` are some structure-based elements.

## Pseudo-element (psd-element)

*Pseudo-elements* (double colon `::` ) targets elements that don't normally exist in the markup. These elements share the same specificity with regular elements (0,0,0,1). 

`::marker` allows you to customize the styling of your `<li>` elements’ bullets or numbers.

`::first-letter` and `::first-line` allow you to (you guessed it!) give special styling to the first letter or line of some text.

## Attribute selectors

This simply targets elements that contain some specific attributes:

```css
  [src] {
    /* This will target any element that has a src attribute. */
  }

  img[src] {
    /* This will only target img elements that have a src attribute. */
  }

  img[src="puppy.jpg"] {
    /* This will target img elements with a src attribute that is exactly "puppy.jpg" */
  }
```

In order to use these selectors, we must be intentional with string matching target attributes. There are three matching conditions that can be used:

- `[attribute^="value"]` - `^=` Will match strings *from the start*.
- `[attribute$="value"]` - `$=` Will match strings *from the end*.
- `[attribute*="value"]` - `*=` The wildcard selector will match *anywhere inside the string*.

```css
[class^='aus'] {
  /* Classes are attributes too!
    This will target any class that begins with 'aus':
    class='austria'
    class='australia'
  */
}

[src$='.jpg'] {
  /* This will target any src attribute that ends in '.jpg':
  src='puppy.jpg'
  src='kitten.jpg'
  */
}

[for*='ill'] {
  /* This will target any for attribute that has 'ill' anywhere inside it:
  for="bill"
  for="jill"
  for="silly"
  for="ill"
  */
}
```

Refer back to [this module on Odin](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-advanced-selectors#thunder-knowledge-check) to review these gems!
