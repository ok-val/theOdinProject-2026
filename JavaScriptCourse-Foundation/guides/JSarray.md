Read more here: [Arrays](https://javascript.info/array)

## Performance 

![[Pasted image 20260317152950.png]]

**Shift and unshift are slow;**
**Pop and push are fast;**
Because shifts requires the every following item to be re-indexed. 
Even if it's O(1), it's still an extra step.


## Looping through arrays

Generally, the easiest and most readable way is to use `for...of` loop.

```js
let alphabet = ['a', 'b', 'c'];

for (const a of alphabet) {
	// do something;
}
```

Avoid using `for...in` because it would also loop through other properties such as `alphabet.length` and so on. 


## About the Length property

The `length` property is updated every time we modify the array. 
It doesn't count but evaluate for the **greatest numeric index + 1**. 
It just assumes that everything fills up to the last occupied memory + 1. Cheeky mf.
If we shorten `length`, the array will be truncated.

```js
let fruits = [];
fruits[123] = "Apple";

alert(fruits.length); // 124
```


## Some interesting GOTTEM

### Loose equality

```js
let arr = new Array('a', 'b', 'c');
// is the same as:
let arr = ['a', 'b', 'c'];
```

BUT,

```js
let arr = new Array(2);
// is ALMOST the same as:
```

```python
arr = np.zeros(2)
# but js won't register any zeros
# There's just going to be 2 undefined slots
```


### Don't compare arrays with ==

**Unless two arrays refer to the same object,** operator `==` will never return True. 

```js
let arr1 = ['a'];
let arr2 = arr1;
console.log(arr1 == arr2) // => true
```

```js 
let arr1 = [];
let arr2 = [];
console.log(arr1 == arr2) // => false
```

`==` does do element-wise comparison.

	`==` converts both sides to primitives
	'===' no primitive conversion


### Be careful when 'copying' arrays

```js
let fruits = ['apple', 'banana'];
let cart = fruits; 
// we remember that (fruits == cart) => true
// both refers to the same object, same memory
fruits.push('cherry'); // updates both list
```

```js
let cart = fruits.slice(0); // is the better technique
```

