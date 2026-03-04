## What is a CSS function? 

It is similar to a programming language, where blocks are reusable to perform different task. Similar to Python, CSS constructs a function quite similarly, passing in positional arguments. 

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

### calc()

```css
:root {
--header: 3rem;
--footer: 40px;
--main: calc(100vh - calc(var(--header) + var(--footer)));
}
/*Now we can use these variables anywhere*/ 
```


