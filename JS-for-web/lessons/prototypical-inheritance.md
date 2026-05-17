---
doc-type: tutorial
sources: https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript
---
JS is a prototype-based language.
This is known as **prototypical/prototypal inheritance**.
*Prototypal inheritance differs from class inheritance*, which is native to other programming language such as PHP, Python, and Java. 
This topic is something I should inspect in another time.

```js
// When we create an object, it automatically inherits from the Object object constructor

let x = {};
// which is the same of
let x = new Object();
// either way, it inherits from the Object.prototype

Object.getPrototypeOf(x); // returns Object.prototype

```

Similarly, when we use the shorthand to create an array. We will also get this prototypical inheritance.

```js
let y = [];
// which is the same as
let y = new Array();

Object.getPrototypeOf(y); // returns Array.prototype
// Alternatively,
y.__proto__; // returns Array.prototype

```

Head over to [[prototype-chain.js]] to see this code in action.


## An overview of under-the-hood

When accessing the property and method of an object, JS will first search the original object itself. If the property or function is not found natively in the object itself (hence, would return false if query `.hasOwnProperty()`), JS will consult *parent* \[\[Prototype]] and the grandparents'. This causes the chain-reaction until the Object \[\[Prototype]].  


> [!tips] .\_\_proto__
> `.__proto__` is an object used to get or set the \[\[Prototype]] of objects instead of using `Object.getPrototypeOf()` or `Object.setPrototypeOf()`. 
> **It's considered deprecated for production code.**
> But it's still a handy tool for demos.


## Inspecting the prototype chain


