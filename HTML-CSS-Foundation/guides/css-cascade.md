There are three cascading relationships that determine what declaration is applied in the end: Specificity, inheritance, and rule order.

## Specificity

> [!definition] Specificity
> A CSS declaration that is more specific will take precedence over less specific ones. Specificity descends in this order:
> 1. Inline styles (forced override)
> 2. ID selectors (most specific selectors)
> 3. Class selectors
> 4. Type selectors
> 5. Universal selector

## Inheritance

In some cases, inheritance may override declarations for parents elements.

```html
<!-- index.html -->

<div id="parent">
  <div class="child"></div>
</div>
```

```css
/* styles.css */

#parent {
  color: red;
}

.child {
  color: blue;
}
```

In this example, the child div is going to be blue. Even though the ID selector has higher specificity.


## Rule order

Given two similarly specific declarations, the last to declare wins.

```css
/* styles.css */

.alert {
  color: red;
}

.warning {
  color: yellow;
}
```

```html
<div class="alert warning">Text</div
```

This is div is going to have yellow texts.