// Re-exporting / Aggregating / Relaying

// A module can also relay values exported from other modules
// without have to writing two seperate import/export statements.
// This comes with a caveat.

export { default as function1, function2 } from "bar.js";

// Using this methods prevent the relayed functions from being usable 
// in the barrel module itself.

// Consider the following example where:
// childModule1.js: exporting myFunction and myVariable
// childModule2.js: exporting MyClass
// parentModule.js: acting as an aggregator (and doing nothing else)
// top level module: consuming the exports of parentModule.js


// In childModule1.js
function myFunction() {
    console.log("Hello!");
}
const myVariable = 1;
export { myFunction, myVariable };


// In childModule2.js
class MyClass {
    constructor(x) {
        this.x = x;
    }
}

export default MyClass ;


// In parentModule.js
// Only aggregating the exports from childModule1 and childModule2
// to re-export them
export { myFunction, myVariable } from "childModule1.js";
export { MyClass } from "childModule2.js";


// In top-level module
// We can consume the exports from a single module since parentModule
// "collected"/"bundled" them in a single source
import { myFunction, myVariable, MyClass } from "parentModule.js";

