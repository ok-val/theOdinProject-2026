// -----------------------------
// CLOSURE EXTENDED
// -----------------------------

// A closure is the ability to access a parent level scope from a child scope, even after the parent 
// function has been terminated.

function createAddFn() {
    let sum;

    function add(a, b) {
        sum = a + b;
        return sum;
    }

    // inner();
    return add;
}

const add1 = createAddFn();
const add2 = createAddFn();

// console.log(add1(2, 3));
// console.log(add1(5, 7));

// What I learned previously was that function-scoped vars would terminated after the function runs.
// However, because sum was passed into add(), this entire sequence resulted in 
// shadowed sums that track privately across different instances of add() functions.

// Perhaps, due to lexical and static scoping property, this inner function add() still maintains access
// to vars that were created at the SAME SCOPE where the inner function was declared.

// Thus, this variable, though executed, was not garbage-collected.
// When we use this characteristic, we essential employ closure.


// ----
// Example 1:

function createGreeting(greeting = "") {
    const myGreet = greeting.toUpperCase();

    // return a no name function
    // Because we pass myGreet from outer scope to inner scope, 
    // the inner scope saves the outer scope from being garbage-collected.
    // This is called CLOSURE.
    return function(name) {
        return `${myGreet}, ${name}!`;
    }
}

const sayGreetings = createGreeting('Greetings!');
console.log(sayGreetings('Val'));
const sayHello = createGreeting('Hello!');
console.log(sayHello('An'));
