// In prototype-intro.md, I learned that:
// 1. All JS objects have a Prototype. 
// 2. When an object is constructed (using a constructor), it is considered an original object.
// 3. All original objects *inherit* their respectively Prototype

// In this part, I learn how to begin to inspect the Prototype of objects. 

function Soap(name, flavor) {
    this.name = name;
    this.flavor = flavor;
}

const soap1 = new Soap("Onsen", "Lavender");
const soap2 = new Soap("Yahzi", "Jasmine");

// console.log(soap1.name); // "Onsen"

// // (1) Here's the method for getting the Prototype of original objects
// console.log(Object.getPrototypeOf(soap1)); // returns an object

// // (2) Here's the method for checking out the prototype from its name
// console.log(Soap.prototype); // returns the same object

// // let's check if these objects are indeed the same
// console.log(Object.getPrototypeOf(soap1) === Soap.prototype); // true


// --- //

// Explanation: 

// (1) confirms that all original objects have a prototype. 
// We can validate this using Object.getPrototypeOf() on any object

// (2) confirms that the Prototype itself is another object.
// We can validate by checking out that the value of [[Prototype]]: Object

// (3) all original objects inherit from the prototype
// This is because original objects contain this [[Prototype]] object implicitly

// --- //


// Now that I can access the prototype of object, 
// I can define on the (make changes to) the Prototype itself
// This is done programmatically without changing the original constructor itself.
// This in turn will affect all behaviors of original objects accordingly.

// So instead of changing the original code in the constructor
function Soap(name, flavor) {
    this.name = name;
    this.flavor = flavor;
    this.getLabel = function () {
        return `I am ${this.name} and ${this.flavor} is my scent.`;
    };
}
// console.log(soap1.getLabel());

// We can *define on the prototype*
// By accessing the [[Prototype]] directly
Soap.prototype.diffuse = function () {
    console.log(`Diffusing my ${this.flavor} scent...`);
}
// console.log(soap2.diffuse()); // Diffusing my Jasmine scent...

// Or by accessing via an original object
Object.getPrototypeOf(soap1).stopDiffuse = function () {
    console.log(`Diffusion stopped.`)
}
// soap2.stopDiffuse(); // Diffusion stopped.

// Either way, I can define on the Prototype to alter the behaviors of the entire class.
// However, it is more readable (and ergo preferred) to use:
// * Object.getPrototypeOf() function for getting [[Prototype]]'s name from objects
// * .prototype property for defining on the [[Prototype]].
