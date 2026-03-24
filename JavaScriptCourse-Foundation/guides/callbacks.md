
> [!info] Callback definition
> Callbacks are functions that are passed as arguments into other functions.

## Some good examples of using callbacks

```js
function myMap(array, callback) {
	const myNewArray = []; 
	
	// the loop happens inside the outer fn 
	// and use the callback on every iteration.
	for (let i = 0; i < array.length; i++) { 
		const callbackResult = callback(array[i]);
		// whatever it does, this callback takes one argument 
		myNewArray.push(callbackResult); 
	}
	
	return myNewArray;
}


// This could be called like this:
const addedArray = myMap([1, 2, 3], (arrayNum) => {
	return arrayNum + 2; 
});

// OR
const addedArray = myMap([1, 2, 3], (arrayNum) => arrayNum + 2)
// However it's called the inner callback takes one argument
```


