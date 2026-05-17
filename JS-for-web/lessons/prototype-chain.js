let y = new Array();

console.log(Object.getPrototypeOf(y)); // returns Array.prototype

// Array y inherits from the Array prototype
console.log(Object.getPrototypeOf(y) === Array.prototype); // true
// console.log(y.__proto__ === Array.prototype); // true

// Array prototype itself inherits from the Object prototype
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); // true
// console.log(y.__proto__.__proto__ === Object.prototype); // true

// The syntax is a bit convoluted for checking if object is a prototype of another
// .isPrototypeOf() is a more readable syntax for this
console.log(Array.prototype.isPrototypeOf(y)) // true
console.log(Object.prototype.isPrototypeOf(y)) // true
console.log(Object.prototype.isPrototypeOf(Array.prototype)); // true

// `instanceof` is even a shorter syntax for this purpose
console.log(y instanceof Array); // true
