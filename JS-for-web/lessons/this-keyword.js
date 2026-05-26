// The keyword `this` refers to the object that owns the methods
// or property being executed.

// ------------------------------------- //
// GLOBAL CONTEXT
// In the global context, `this` refers the global object, which
// is the window object on the web browser or the `global` object
// on Node.js

// I verify this by using the following code:
console.log(this === window); //true 

// Any modifications on the global object can be done via `this`
this.color = 'red';
console.log(window.color);


// ------------------------------------- //
// FUNCTION CONTEXT

// There are four main ways to use this:
// 1. Simple function calls

// When I call a function, the value of `this` depends on the 
// mode of the script. Two modes: non-strict and strict

// In NON-STRICT mode, `this` uses the browser window as the
// global object

checkThisOut = function () {
    console.log(this === window);
}
// Hence, the following functions should do the same thing
checkThisOut(); // true
window.checkThisOut(); // true
this.checkThisOut(); // true

// In STRICT mode, `this` sets the global object to undefined.
checkThisOut = function () {
    "use strict";
    console.log(this === undefined);
}
// Now, `this` is set to undefined.
checkThisOut(); // true

