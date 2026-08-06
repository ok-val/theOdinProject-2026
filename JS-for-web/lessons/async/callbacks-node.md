Extracted from: https://github.com/max-mapper/art-of-node#callbacks

## Callbacks

Callback is the most important topic to understand in using Node.JS
because nearly everything in Node uses callbacks. 

Determining if a function is ASYNC or not depends on context.

In sync code, code is executed procedurally (from top to bottom):
```js
const num = 1;
function incrementOne() {num++};
incrementOne();
```

On the other hand, Node, uses mostly ASYNC code.
```js
const fs = require('fs'); // require() from CommonJS project
let num;

function incrementOne() {
    // fs, read number.txt, when done, run doneReading
    // doneReading, parse fileContent into num, increment num
    fs.readFile('number.txt', function doneReading(err, fileContents) {
        num = parseInt(fileContents);
        num++;
    })
}

incrementOne();

console.log(num); // undefined
```

But why is num still undefined?
We know that `fs.readFile()` is an async method. 

The real issue is that nothing is telling `console.log()` that it has to 
wait for `incrementOne()` to return something.

This is why you want to have callbacks instead of mere commands as such.

Callbacks are just functions that get run at some later time.
Callbacks are for when we don't know WHEN some async operation will
complete, but we do know WHERE the operation will complete --- the last
line of an async function.

As we can see with:
`fs.readFile('number.txt', function doneReading(err, fileContents)`
the function `doneReading()` is a callback, which only runs after `fs` 
has finished accessing the `number.txt` file under-the-hood.

So a simple way to add `console.log()` as part of the callback is just 
to... well add it where the last line of the async would end.

```js
function incrementOne() {
    // fs, read number.txt, when done, run doneReading
    // doneReading, parse fileContent into num, increment num
    fs.readFile('number.txt', function doneReading(err, fileContents) {
        num = parseInt(fileContents);
        num++;
        console.log(num);
    })
}
```
or pack it as an entire callback to `incrementOne()`:
```js
function incrementOne(callback) {
    // fs, read number.txt, when done, run doneReading
    // doneReading, parse fileContent into num, increment num
    fs.readFile('number.txt', function doneReading(err, fileContents) {
        num = parseInt(fileContents);
        num++;
        callback();
    })
}
```

### Callback hell

These are some combination of patterns that:
Add callbacks to callbacks to callbacks, ad infintum

```js
a(function() {
    b(function() {
        c(function() {
            d()
        })
    })
})
```

### Promises

To prevent callback hell, we can also use `doThis().then(doThat())`
assuming that `doThis()` returns a Promise object

```js
const fs = require('fs');
let num;

fs.readfile('number.txt', function addOne(err, contents) {
    num = parseInt(contents);
    num ++;
})
.then(console.log(num))
.then(doMore);
```



