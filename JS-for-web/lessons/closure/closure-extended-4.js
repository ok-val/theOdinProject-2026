// ------------------------
// CLOSURE EXTENDED 4
// ------------------------

// EMULATING PRIVATE METHODS WITH CLOSURES
// It's worth reviewing this particular use of closure one more time.

// Use an Immediately-Invoked Function Expression (IIFE) to create private methods

const privateMethod = (() => {
    let res;

    const add = function (a, b) {
        res = a + b;
    }

    const subtract = function (a, b) {
        res = a - b;
    }

    const getResult = () => res;

    return {add, subtract, getResult};
})();

privateMethod.add(2,3);
console.log(privateMethod.getResult());

// In previous examples, I defined different lexical environment for the same function (function factory)
// In this example, three unique functions share the same lexical environment.
// And the function factory gets called immediately --- the concept of IIFE.



