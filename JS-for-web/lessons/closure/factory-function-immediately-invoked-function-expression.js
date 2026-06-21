// Immediately Invoked Function Expression or IIFE
// Which is function that is called immediately on creation.

// The syntax wraps an arrow function within parentheses and calling it immediately.
(() => { console.log('foo'); })();

// How is this useful for factory functions?
// Consider this example one more time (taken from factory-functions.js)

function createUser(name) {
    const username = '@' + name;

    let reputation = 0;
    const getReputation = function () { return reputation };
    const giveReputation = function () { reputation++; };

    return { name, username, getReputation, giveReputation };
}

const userOne = createUser('kokuNishimura');
userOne.giveReputation();
console.log(`User One's reputation is at ${userOne.getReputation()}.`);


// Notice that when using function declaration for factory function, 
// we have to initiate the factory function inside some variable.

// IIFE is a work-around for this because it calls the factory function upon creation
// Here's how we can use IIFE for this purpose:

// We use an object to call the factory function immediately
const calculator = (() => {
    let lastResult;

    const add = (a, b) => {
        lastResult = a + b;
        return lastResult;
    };

    const subtract = (a, b) => {
        lastResult = a - b;
        return lastResult;
    }

    const getLastResult = () => lastResult;

    return { add, subtract, getLastResult };
})(); // notice the immediately invocation

// Now, we can simply use the object to call its inner function like the syntax above.
// We skipped naming the factory function entirely.
console.log(calculator.add(2,4)); // 6
console.log(calculator.subtract(5,3)); // 2
console.log(calculator.getLastResult()); // 2

// Why the IIFE?

// Cons:
// * Because we skipped naming the function, we can't use this factory function later.
// * IIFE can be only be called ONCE, it can't be referenced later. 

// Pros: 
// * Using IIFE for factory functions results in a concept called ENCAPSULATION
// Encapsulation is bundling data, code or something into a single unit (like above),
// with selective access to the things inside that unit itself (i.e., the factory function 
// is contained within a object `calculator`, thus, not exposed to the outside scope).

// This action is called encapsulating code into MODULES.
// In other words, encapsulation results in modules.
