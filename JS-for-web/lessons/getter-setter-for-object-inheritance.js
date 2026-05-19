// In programming, we often want to take something and extend its
// functionality

// In constructor-function-in-depth.js, we learned to use
// constructor function for prototypal inheritance.
// However, this is not the only possible way to implement
// inheritance. 
// Not only can the cookie cutter, but the cookie itself can
// be a prototype!

// For example, a User object has its properties and methods. 
// We want an Admin and Guest object has offshoots of User.
// Admin and Guest will have some common functions to User
// But they will have unique capabilities as well

let user = {
    // We have an user object with two properties 
    name: "Immy",
    surname: "Loo",

    // We can use a setter and getter function to manipulate
    // properties
    
    // function for setting fullName
    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    },

    // function for getting fullName
    get fullName() {
        return `${this.name} ${this.surname}`;
    },
}; 

let admin = {
    __proto__: user,
    isAdmin: true,
}

console.log(Object.getPrototypeOf(admin) === user); // true
console.log(admin.prototype); // undefined
console.log(admin instanceof user);