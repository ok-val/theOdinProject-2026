## Loops

**Why are they useful?** 
We use a loop to repeat a set of instructions many times.

```js
// for loop using number
for (let i = 0; i <= 3; i++) {
	console.log(i) // 0,1,2
}
```

Let's break down what's in the {}: 

1. **Initializer** -- `let i = 0`: This is our counter var
2. **Condition** -- `i <= 3`: Exit condition
3. **Final expression** -- `i++`: Our increment or decrement expression

Here's what happens exactly:

```js
let i = 0;
if (i < 3) {do(); i++} // i = 0 -> 1
if (i < 3) {do(); i++} // i = 1 -> 2
if (i < 3) {do(); i++} // i = 2 -> 3
```


```js
const cats = ["Tiger", "Lion", "Leopard"];

// for loop through array
for (const cat of cats) {
	console.log(cat);
}
```

### Skipping parts in for loop

Any part of `for` can be skipped. This is quite advanced, but it is possible.

```js
// only works if i is defined before the loop starts
let i = 0;

for (; i < 3; ) {
	alert(i)
}
```

### Map and Filter

`map()` and `filter()` are just methods of array. 

First, `map()`:

```js
function toUpper(string) {
	return string.toUpperCase()
}

const cats = ["Tiger", "Lion", "Leopard"];

// funky ass syntax - What's passing a function into map()
const upperCats = cats.map(toUpper);
// but this function functions like a loop
const upperCats = [];

for (const cat of cats) {
	upperCats += cat.toUpperCase();
}
```

Now, `filter()`:

```js
function returnCatStartingWithT(string) {
	return string.startsWith("T");
}

const cats = ["Tiger", "Lion", "Leopard"];

const catListStartingWithT = cats.filter(returnCatStartingWithT);
// this is how we would write this using loop
for (const cat of cats) {
	if (cat[0] == "L"){ // It's case-senstive 
		catListStartingWithT.push(cat);
	} else {
		continue; // we don't need this, here for etiquette
	};
}
```


### While and do... while

There are many other general loops in JS. 
Here's the first look at another popular one, the `while` loop and how it's constructed.

```js
initializer
while (condition) {
	// code to run

	final-expression
}
```

This is interesting because of how the `while` loop is constructed that has allowed it to change the global variables that is enabling it to run. In this sense, the while loop has element of autopoiesis.   

```js 
i = [1];
while (i) {
	i.push(i[i.length - 1] + 1);
	console.log(i);
} // This will result in an infinite loop
```


Here's the `do... while` loop. The loop is constructed differently because the final-expression precedes the condition.

```js
initializer

do {
	// code to run

	final-expression
} while {condition}
```

The main different between a `do... while` and a `while` loop is that the code inside the `do... while` loop is *always executed at least once*. For the other while and for loops, the condition precedes the final-expression; that is, if the condition is not met, the loop will not execute at all.


### Break and Continue

**Break** would break out of any loop entirely;
**Continue** would skip the current iteration and forces the loop to start a new one. This directive is only callable inside a loop.

```js
for (let i = 0; i <= 10; i++) {
	if (i % 5 == 0) {
		console.log(`${i} is divisible by 5.`);
		break;
	} else {
		console.log(`${i} is not divisible by 5.`);
		continue;
	}
}
```

```js
let sum = 0;

while (true) {
	let value =+ prompt("Enter a number", '');
	if (!value) break;
}

alert(sum);
```


### Labels for break/continue

Since `break` and `continue` directives breaks us out of the loop one loop, what if we want to break out of multiple nested loops?

See this example:

```js
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    // what if we want to exit from here to Done (below)?
    if (!input) break; 
    // this only breaks us out of the inner loop
  }
}

alert('Done!');
```

We need a way to stop this process if the user decides to cancel the input.
But `break` terminates the loop and `continue` would increment the loop. 
We can state the label name at the beginning of the loop.

```js
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    // what if we want to exit from here to Done (below)?
    if (!input) break outer;
    // this tag specifically where the break should look up to.
  }
}

alert('Done!');
// this line will be run but only if the outer: tag is in the same indentation as this one
```

It's important to remember that *labels do not look down, only up.* 


