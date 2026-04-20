---
doc-type: wiki-page
sources: https://web.dev/articles/min-max-clamp
---
## What is a CSS function? 

It is similar to a programming language, where blocks are reusable to perform different task. Similar to Python, CSS constructs a function quite similarly, passing in positional arguments. CSS function allows making responsive elements before touching JavaScript.

CSS does not allow us to create new functions but it allows creating variables. 

```css
element {
	--header: 3rem;
}
```

And functions are called like such:

```css
color: rgb(0, 42, 255);
background: linear-gradient(90deg, blue, red);
```

There are four major ones: `calc()`, `min()`, `max()`, and `clamp()`.

The full list of functions can be found [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/Functions). 

### calc()

`calc()` allows the computer to do the math for you. You can pass different units and nest `calc()` 

```css
:root {
--header: 3rem;
--footer: 40px;
--main: calc(100vh - calc(var(--header) + var(--footer)));
}
/*Now we can use these variables anywhere*/ 
```


### min()

`min()` allows responsive sizing by evaluating between two provided arguments. 

The most common use case for min is as follows:

```css
width: min(150px, 100%);
```

Where you would provide a scaling value (relative to the parent or itself) and an absolute unit (px). *This checks whether 100% of the parent element's width is smaller than 150px*. If smaller, it will scale to fill 100% of the parents container.

### max()

`max()` works similarly, but reversed, evaluating the largest possible value within the parentheses.

```css
width: max(100px, 4em, 50%);
```

In the example provided, the function compares the three values for the largest. *If `100px` is the larger than both `4em` and 50% of the parent container, the function will return `100px`*.


> [!info] Differentiating min() and max() 
> Interestingly, **min determines the largest dimension** (this dimension cannot exceed the largest min value). Conversely, **max determines the smallest dimension** (the dimension cannot be smaller than the smallest max value).


### clamp()

`clamp()` takes 3 values at the following position. For example: 

```css
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
}
```

* Pos 0: min value
* Pos 1: scaling value
* Pos 2: max value

This function would result in the a value that is no less than `1.5rem`, no more than `3rem`, and the in-between value is 5vw (notice that 5vw is still not the most optimal for the steep rate of change---5x).

