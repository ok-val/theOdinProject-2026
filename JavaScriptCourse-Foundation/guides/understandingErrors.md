[Lesson link](https://www.theodinproject.com/lessons/foundations-understanding-errors)

Reading and understanding errors is a required skill. Being able to read errors is as important as reading docs. *Do not sleep on reading bugs*.

## Navigating errors

![[Pasted image 20260312184904.png]]

This image shows Reference Error. When we follow the link (underlined in blue), we will go to the part of the code where this error originates.

![[Pasted image 20260312185146.png]]

When the error originates at different points in the code, the Error message will tell us the trace of that error. We should investigate the earliest instance where this bug is encountered. 

## Error types  

Here are a few errors types that are common in JS:

* **Reference error:** For when *vars are not defined* within the execution context of certain functions. To understand reference error is to understand scope, call stack, and execution context.
* **Syntax error:** For when your code has a *'grammar mistake'*. Syntax errors are quite common especially when using ASCII conditionals such as & or %, or forgetting a ; at the end of an expression or assignment. 
* **Type error:** For when you *misuse a data type* that is not supported by a function or operator. For example, you cannot use the method push on a string data type (e.g., string.push()).

## Errors vs Warnings

Errors stop the code from running where warnings will not stop the code. 
Warnings are shown in <mark class="hltr-yellow">yellow</mark> . Errors are shown in <mark class="hltr-red">red</mark>.

## What type of thing is an Error exactly?

Revisit [[JSDatatypes]]. 

**Errors are basically JS objects that represents errors.** Similar to other objects, they contain key--value pairs and can be constructed (or declared?). 

All types of errors are subtypes of Errors (e.g., object Error is the parent of Reference Error). Hence, it inherits all methods from the parent object. 

### How to catch an error using the try--catch statement / block

Here are a few methods/parameters of the Error object.

```js
try {
    let a = undefinedVar;
} catch (e) {
    console.log(e instanceof ReferenceError)
    console.log(e.message)
    console.log(e.name)
    console.log(e.stack)
};
```