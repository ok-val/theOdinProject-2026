## Basic selectors

**Basic syntax** - Basic construction

```css
selector {
	property: value;  
}
```

**Universal** - Selects all

```css
* {
	property: value;
}
```

**Type** - Selects matching types

```css
type-name {
	property: value;  
}
```

**Class** - Selects matching class

```css
.class-name {
	property: value;  
}
```

**ID** - Selects matching IDs

```css
#id-name {
	property: value;  
}
```

**Group** - Join selectors

```css
div, p {
	property: value;  
}
```

**Chaining** - selects chained attributes

```css
.subsection.header {
	property: value;  
}
```

Will select elements with multiple classes and/or IDs

```html
<div class-"subsection header">Header</div>
```

**Descendant combinator** - selects children

```css
div h1 {
	property: value;  
}
```

Will select all h1 under divs


## Ways to apply CSS styles

**External CSS:** Use `<link rel="" href="">` (void element) within the `head` element. This is the most robust approach. 

**Internal CSS:** Use `<style>` element within the `head` element. Used mostly for simplicity sake or for adding unique CSS to individual pages.

**Inline CSS:** Use attribute `style` within individual element. This is not recommended, but is useful for one-off applications.