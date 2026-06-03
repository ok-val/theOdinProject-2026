// Limitations of constructor

// The biggest problem of constructors is people use them wrong (by not using the *new* keyword).
// This must be a big issue.
// This error is hard to catch and the error message is confusing and elusive.
// BUT, in object-constructor.js, I learned to use the `new.target` to prevent others from using it
// as a regular function. (I also covered the use of instanceof to create a conditional, checking
// for inheritance, but this method can get confusing as well since instanceof works for the entire
// prototype chain). 

// Because of this, some people prefer to use Factory Functions.


// ----------------
// FACTORY FUNCTIONS

// Factory function makes use of closure (see closure.js) to create new objects. 

function User(name) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call this class constructor");
    }
    this.name = name;
    this.username = '@' + name;
}

function createUser(name) {
    const username = '@' + name;
    return { name, username };
    // This is the new shorthand for epononymous property names:
    // return { name: name, username: username};
}

let user1 = createUser('alanparker');
let user2 = new User('alanparker');

Object.setPrototypeOf(user1, User.prototype);

console.log(user1);
console.log(user2);

console.log(Object.getPrototypeOf(user1) === User.prototype);
console.log(Object.getPrototypeOf(user2) === User.prototype);

