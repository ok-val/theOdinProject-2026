// -----------------------
// CLOSURE EXTENDED 2
// -----------------------

// This lesson is presented by MDN.
// A closure is the combination of a function bundled together (enclosed) with references to its
// surrounding state (the elxical environment). 
// In other words, a closure gives a function access to its outer scope. 
// In JS, closures are created every time a function is created at function creation time.

// When inner functions are created at function creation time, the inner function gets access to 
// vars that are declared within the same scope. This is an example of **lexical scoping**.
// LEXICAL SCOPING uses the location where a fn/var is declared (within the source code) to 
// determine where that fn/var is available (see more in closure-extended-1.js and scope-extended-2.js).

// Thus, MDN uses the term LEXICAL ENVIRONMENT, which stands for the surrounding environment of a fn
// when it was created during fn creation time.

// Consider using lexical environment accurately:
function makeAdder(x) {
    return function (y) {
        return x + y;
    }
}

const add5to = makeAdder(5);
const add7to = makeAdder(7);

// add5to and add7to both form closures.
// They share the same function body, but different LEXICAL ENVIRONMENTS.
// For add5to, x = 5, while in the lexical envrionment of add7to x = 7.

