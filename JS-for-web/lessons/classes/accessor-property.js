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

    // First, let's consider the accessor getter
    get userName() {
        return `${this.name} ${this.surname}`;
    },

    // Implementing the userName property this way essentially does the same thing as a function literal
    getUserName() {
        return `${this.name} ${this.surname}`;
    },

    // PRO: However, the property remains a property
    // Which does not clog up the function name space. 

    // set userName() {
        
    // }
};

console.log(user.userName);
console.log(user.getUserName());
