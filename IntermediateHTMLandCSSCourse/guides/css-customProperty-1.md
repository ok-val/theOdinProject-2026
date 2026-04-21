---
doc-type: wiki-page
sources: |-
  https://www.youtube.com/watch?v=PHO6TBq_auI,
  https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties#inheritance_of_custom_properties
---
## Why are custom properties so useful?

It allows manipulating multiple properties using the same variable. 
Declare once in `:root` element, and use at various places in the document.

Global properties are named using kebab-casing (e.g., `--var-name`).
These are declared in `:root` so that it cascades throughout the document.
Local properties are named with prefixed underscore(s) (e.g., `--_var-name`) 


## Inheritance of custom properties

A custom property (using `--` instead of `@property`) always inherits the value of its parent. 

```html
<div class="one">
  <p>One</p>
  <div class="two">
    <p>Two</p>
    <div class="three"><p>Three</p></div>
    <div class="four"><p>Four</p></div>
  </div>
</div>
```

```css
div {
  background-color: var(--box-color);
}

.two {
  --box-color: teal;
}

.three {
  --box-color: pink;
}
```

In this example, all `divs` use `--box-color` for their background. 
`div.one` starts with a null value because `--box-color` is undeclared. If its children don't declare its value, `--box-color` will always return null.  
`div.two` and its children will use teal for its background color. The application of the color teal is limited within the scope of its descendants only.
As such, `div.three` and its children will use pink for its background color. 

## Using `@property` to control property behaviors

The `@property` at-rule allows me to control a few knobs of the property behavior. 

```css
@property --box-color {
  syntax: "<color>";
  inherits: false;
  initial-value: teal;
}
```

Here, I can declare the data type of the property.
I can declare whether the property will cascade descendants.
I can declare its initial value.

As such, given this following html structure, we know that the `--box-color` value declared inside `div.parent` will not cascade to its child. The child will always assume the `initial-value` if not otherwise stated.


