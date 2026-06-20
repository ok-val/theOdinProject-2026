// In previous examples, I learned that an object can have properties.
// These are usually data properties storing objects like functions and numbers

// There's a second type of object property called ACCESSOR property. 
// Accessor properties are functions that run when getting or setting a value.

// Accessor properties are represented by 'getter' and 'setter' methods. 
// In an object literal they are denoted by the keywords get and let.

// let obj = {
//     get propName() {
//         // getter, the code executed on getting obj.propName
//     },

//     set propName() {
//         // setter, the code executed on setting obj.propName = value 
//     }
// }

// Let's consider an example
let user = {
    name: 'Ori',
    surname: 'Orio',
    age: '131',

    // First, let's consider known alternatives that allow me to return fullName
    // Since I cannot use object literals to create execution scopes for this,...
    // fullName = `${this.name} ${this.surname}`,

    // I could create a new function that returns fullName
    getFullName() {
        return `${this.name} ${this.surname}`;
    },
    
    // Or I could use the getter accessor property
    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    // Implementing the fullName property this way essentially does the same thing as a function literal
    // PRO: However, the property remains a property
    // Which does not clog up the function name space and memory. 
    // and it avoids creating redundant properties such as fullname: `${this.name}`...

    // PRO: Another benefit is that accessor property can be used to alter other data properties
    set fullName(value) {
        // Use destructuring to assign existing data properties
        [ this.name, this.surname ] = value.split(" ");
    }
};

console.log(user.fullName); // Ori Orio
// console.log(user.getFullName()); // Ori Orio

user.fullName = 'Val Valory';
console.log(user.fullName); // Val Valory

// As a result, I now have a property that is readable and writable with just a few lines of codes
