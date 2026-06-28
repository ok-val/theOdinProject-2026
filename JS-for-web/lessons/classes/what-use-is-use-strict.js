// So how does the 'use strict' directive manifest in practice?

// To reinstate, strict mode prevents `this` from being coerced to something else
// that it was not originally created on.

// Without strict mode, we have sloppy mode, which can set `this` to anything.
// With strict mode, JS refuses to make the automatic substitution like sloppy mode,
// meaning that `this` must refer to the original receiver. 


// Even when a static or instance method is called without a value for this,
// such as by assigning the method to variable and then calling it, 
// the `this` value will be undefined.

// To demonstrate:

class Animal {
    // instance method
    speak() {
        console.log(this);
    }

    // static method 
    static eat() {
        console.log(this);
    }

    // They both return the same thing, 
    // but only the public one is created on the prototype.
}

const obj = new Animal();

// We can expect both methods to work using the correct this. 
obj.speak(); 
Animal.eat();


const notCalledOnThis1 = obj.speak;
const notCalledOnThis2 = Animal.eat;

notCalledOnThis1(); // I'm expecting undefined
notCalledOnThis2(); // I'm expecting undefined
