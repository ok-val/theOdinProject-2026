// In prototype-intro.md and accessing-objects-prototype.js, 
// I learn how to accessing and define an object's [[Prototype]]
// But what is the purpose of this?

function Soap(name, flavor) {
    this.name = name;
    this.flavor = flavor;
    this.getLabel = function () {
        return `I am ${this.name} and ${this.flavor} is my scent.`;
    // When created, this function will also contain the property [[Prototype]],
    // inheriting from the Object object.
    };
}

const soap1 = new Soap("Onsen", "Lavender");
const soap2 = new Soap("Yahzi", "Jasmine");

console.log(Object.getPrototypeOf(soap2)); // returns the [[Prototype]] of soap2 which is Soap
// Because Soap itself is an original object of the Object object,
// It inherits many functions of the object Object, which inclues Object.valueOf();
console.log(soap2.valueOf());

// To check if the method .valueOf() is native to the object soap2
console.log(soap2.hasOwnProperty("valueOf")); // false: valueOf() is not native to soap2
console.log(Soap.prototype.hasOwnProperty("valueOf")); // false: valueOf() is also not native to Soap 
console.log(Object.prototype.hasOwnProperty("valueOf")); // true: valueOf() is only native to Object

// Note that Soap and Object are function constructors here. Thus, only by accessing their [[Prototype]]
// can I call the function .hasOwnProperty() to query what properties / methods they have.

// Also note that 
console.log(Soap.prototype.hasOwnProperty("constructor")); // true: the constructor property is 
// the only native property that the function Constructor Soap has
// This is true for most function constructors created this way 


// ----- //
// Explanation
//
// Here's what we know:
// 1. When function Soap() is created, it automatically inherits the .prototype
// property from Object which is the [[Prototype]] object of Soap.
// 2. Hence, it turns into an object that can construct other Objects by *passing on* this .prototype
// property for everything it in turns creates.


