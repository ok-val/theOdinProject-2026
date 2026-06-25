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


// 2. Method call with flexible `this`
// This is how I normally use `this` in a function call

let car = {
    brand: "Honda",
    getBrand: function () {
        return this.brand;
    },
}

console.log(car.getBrand()); // Honda

// We can store this function in another variable
let printBrand = car.getBrand;
// printBrand now references car.getBrand directly
console.log(printBrand === car.getBrand); // true

// Here's what exists inside printBrand
// printBrand = function () {
//     return this.brand;
// }

// Since we are in strict mode, `this` is undefined
console.log(printBrand()); // undefined

// To make the `this` of printBrand refer to a specifc value,
// I can use the method bind that function objects inherits from
// Function.prototype. This method creates a new function that
// refers `this` to a specific object. 

printBrand = car.getBrand.bind(car);
console.log(printBrand === car.getBrand); // false
console.log(printBrand()); // Honda

// READ MORE: https://www.javascripttutorial.net/javascript-this/
