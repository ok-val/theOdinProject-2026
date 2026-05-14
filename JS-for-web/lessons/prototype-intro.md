---
doc-type: wiki-page
sources: https://www.theodinproject.com/lessons/node-path-javascript-object-constructors
---
All objects in JS have a prototype.
It's referred to as the **\[\[Prototype]]** (seen when inspected in the DOM).

## The tenets of the Prototype object

~={blue}All objects JS have a Prototype.=~
In [[class-constructor.js]], I created two objects: `tom` and `wang` (created by the object constructor `Patient(name, age, gender)` and `Player(name, marker)`, respectively). 

These created objects also have a prototype. But what does it mean?

~={blue}The Prototype is another object.=~
Just like any other JS objects, the Prototype can have properties and methods. 

~={blue}Created (original) objects inherits all methods and properties from its Prototype=~
Original objects (objects that are created object constructors, such as `tom` and `wang`) *inherits* their properties and methods of its Prototype. 

For the second part of this lesson, go to [[accessing-objects-prototype.js]].

## Accessing the \[\[Prototype]]

There are two methods for accessing the \[\[Prototype]]:

```js
// (1) Here's the method for getting the Prototype of original objects
console.log(Object.getPrototypeOf(soap1)); // returns an object

// (2) Here's the method for checking out the prototype from its name
console.log(Soap.prototype); // returns the same object

// let's check if these objects are indeed the same
console.log(Object.getPrototypeOf(soap1) === Soap.prototype); // true
```

**(1) confirms that all original objects have a prototype.**
We can validate this using `Object.getPrototypeOf()` on any object

**(2) confirms that the Prototype itself is another object.**
We can validate by using `Soap.prototype` and see the value of \[\[Prototype]]: Object

**(3) all original objects inherit from the prototype**
This is because original objects contain this \[\[Prototype]] object implicitly


> [!warning] `Object.getPrototypeOf()` function vs. `.prototype` property
> `.prototype` is a *property* of functions that determines what a original object's \[\[Prototype]]. That is when a function constructor is made, JS creates this `.prototype` property inside them automatically.
> 
> According to the source, the function `Object.getPrototypeOf()` is for accessing Prototype, not `.prototype` property.
> 
> **Takeaway**
> * Use the `Object.getPrototypeOf()` for accessing Prototype from the original object. Because the syntax makes it more readable like this. It would seem amateurish to use it for new function definitions. Use it in the DOM to get the \[\[Prototype]]'s name.
> * Use the `.prototype` property to define new functions. The syntax uses the \[\[Prototype]]'s name explicitly. Making it more readable and intentional for this purpose.

![](https://cdn.statically.io/gh/TheOdinProject/curriculum/cffc199a8cfbfcd61160b00c4cf61e1d6bb6ff2e/javascript/organizing_your_javascript_code/object_constructors/imgs/00.png)

> [!warning] `.__proto__`
> Before `Object.getPrototypeOf()` and `Object.setPrototypeOf()`, there was `.__proto__` to get or set prototypical behaviors. This is now deprecated. But do expect to see it older codebases (ergo to be refactored).


## Why do we need this? 

**What use is an object's \[\[Prototype]]?**

1. **Memory efficiency:** Defining every property and function takes up a lot more memory! 
2. **Prototypal inheritance:** More practically, this method allows us to batch property and function definitions so that all constructed objects would follow. 



