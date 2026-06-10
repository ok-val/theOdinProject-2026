// ------------------------------
// CLOSURE EXTENDED 5
// ------------------------------

// CLOSURE SCOPE CHAIN
// A nested function's access to the outer function's scope 
// includes the enclosing scope of the outer function

// Consider this following example:

const e = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d + e;
            };
        };
    };
}

// console.log(sum(1)(2)(3)(4)); // 20

// calling sum(1) would create a function that takes (b)
// calling this function would create another function that takes (c)
// and so on


// --------------------------
// CLOSURE OVER BLOCK-SCOPED VARIABLES

function outer() {
    let getY;
    if (true) {
        const y = 6;
        getY = () => y;
    }
    // console.log(y); // undefined -- due to the lexical environment of this function, y doesn't exist
    console.log(getY()); // 6 -- y exists in the lexical environment of this fn 
    // console.log(y); // undefined
}

// outer();


// --------------------------
// CLOSURE OVER MODULES
// (see closure-extended-5-module.js)

import { getX, setX } from "./closure-extended-5-module.js";
// require this script to run as a module (type = "module")

console.log(getX()); // 5
setX(10);
console.log(getX()); // 10


