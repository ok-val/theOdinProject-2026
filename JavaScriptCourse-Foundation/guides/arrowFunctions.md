Let's review how arrow functions could look like using a few syntax:

```js
// Omitting curlies
const fn = () => alert('function activated');

// Including curlies for multi-step function
const fn = () => {let msg = 'function activated'; alert(msg);};

```

Notice that if you want to return value, the directive `return` is mandatory when using curlies. This is important for calling multiple functions in the same function call. See exercise-12 in js-array folder for a specific sample: 

```js 
function groupById(arr) {
	return arr.reduce(
		(accumulator, currentVal) => {               
			accumulator[currentVal.id] = currentVal;   
			return accumulator},  // explicit return the created object for the next iteration  
		{},   
	)
}
```



