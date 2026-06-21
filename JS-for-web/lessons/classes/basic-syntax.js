// Definition:
// In OOP, a class is an extensible program-code template for creating objects,
// providing initial values for state (member variables) and implementations of
// behaviors (member functions or methods) (Wikipedia).

// Historically, JS does not have classes until ES6. It's a basically a new syntax 
// that mostly resembles object constructors and prototypes.

class UserCl {

    // the constructor method is automatically called by `new`
    // here the object can be initialized
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hi, I'm ${this.name}.`);
    }
}

let user1 = new UserCl('Ori');
user1.sayHi();
console.log(user1 instanceof UserCl); // true

// Notice how closely classes and function constructors look
// Both enables object inheritance 

function UserFn(name) {
    
    this.name = name;
    
    this.sayHi = () => {
        console.log(`Hi, I'm ${this.name}.`);
    }
}

let user2 = new UserFn('Val');
user2.sayHi();
console.log(user2 instanceof UserFn); // true

// Note that the notation for class definition does not require commas or semi-colons