
*Otherwise known as CSS variables*.

These are extremely useful because:

* Storing and reusing variables (similar to how Python variables and constants).
* Centralize variable control to streamline adjustments in larger projects.

```css
.error-modal {
  --color-error-text: red;
  --modal-border: 1px solid black;
  --modal-font-size: calc(2rem + 5vw);

  color: var(--color-error-text);
  border: var(--modal-border);
  font-size: var(--modal-font-size);
}
```

In the example above, you can see that once you update the `--model-border` declaration, the rest will be automatically updated.


> [!note] A few interesting facts about property names
> 1. They are case-sensitive (i.e., `colortext` $\neq$ `colorText`).
> 2. Use kebab case to name them.
> 3. These declarations are stateful and not semantically arbitrary, we should not use camelCasing because `colorText` is harder to search than `color-text`. Notice that `color-text` follows the `name-category` rule for indexability.

## Variable stacking

When you call a predefined variable, use `var()`. 

We can stack arguments into `var()` similarly to how we do *system font stack*, where if a variable is not found, `var()` will to whatever else we choose as fallback. 

```css
color: var(--undeclared-again, var(--color-text, yellow));
```

In the instance above, the `--undeclared-again` and `--color-text` are undefined, `yellow` will be called instead.

## Scope

Similar to global and local scope in Python, the scope of a variable *includes only the selector the variable was declared for* as well as its children.

```html
<div class="red-div">
  <p class="red-paragraph">Within red-div's scope, I get red bg!</p>
</div>
<p class="blue-paragraph">Outside red-div, I get blue bg.</p>
```

```css
.red-div {
  --red-bg: red;
}

.red-paragraph {
  background-color: var(--red-bg);
}

/*This div cannot access --red-bg */
/*Calling --red-bg here returns null */
.blue-paragraph {
  background-color: var(--red-bg);
}
```

### Global scope selector

When defining a variable that can be reused for multiple elements, *use the `:root{}` pseudo-class selector*; by default, class selector has higher specificity than element selecting alone (e.g., `html{}`). This is most often used for applying custom themes within CSS.

The standard way to name your global variables should be like this:

```css
:root {
	--color-bg: blue;
}
```

```css
:root.dark {
  --border-btn: 1px solid rgb(220, 220, 220);
  --color-base-bg: rgb(18, 18, 18);
  --color-base-text: rgb(240, 240, 240);
  --color-btn-bg: rgb(36, 36, 36);
}

:root.light {
  --border-btn: 1px solid rgb(36, 36, 36);
  --color-base-bg: rgb(240, 240, 240);
  --color-base-text: rgb(18, 18, 18);
  --color-btn-bg: rgb(220, 220, 220);
}
```

With these variables defined in `:root{}`, we can use additional JS to functionalize the thematic change via button with function. 

### Local scoped (private) custom properties

With the universal custom properties defined in `:root()`, we have a universally scoped set of variable to work with. 

Similar to how you could define a local variable in function definition or statements, we can also do it in CSS. *To differentiate them for clarity and debugging* down the line[^KP_usi], let's use this naming convention for local properties like this:

```css
/*Declaration*/
.local-class {
	--_color-bg: orange;
}

/*Access*/
.sublocal-class {
	color: var(--_color-bg, black)
}
```

[^KP_usi]: [Using CSS custom properties like this is a waste](https://www.youtube.com/watch?v=_2LwjfYc1x8)


