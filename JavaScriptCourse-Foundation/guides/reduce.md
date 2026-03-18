Reduce feels a little convoluted. Here's the syntax of reduce:

```js
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
```

**Reduce takes a list and returns a single value.** 

If the initial value is provided as 0, the accumulator starts at 0. Here's how the accumulator works recursively:

![[Pasted image 20260318160216.png]]

