// continued from scope.js and scope-extended.js

// ------------------------------------------------ //
// BLOCK SCOPE
// ------------------------------------------------ //

// Besides from functions, blocks are also defined by the { curly braces }.
// Think of these { curly braces } like gates and these gates keep the variables inside from
// being accessible outside. 

// EXAMPLE 1:

// ---
// if (true) {
//     let blocked = true;
//     const BLOCKED = true;
//     var notBlocked = true;
// }

// console.log(blocked); // undefined error
// console.log(BLOCKED); // undefined error
// console.log(notBlocked); // true 
// ---

// Most blocks would limit inner var access, but loops are exceptions

// EXAMPLE 2
// Another example of block scope is using for loops

// ---
// for (var i = 0; i <= 3; i++) {
//     console.log(i);
// }

// console.log(`Current value of i is ${i}`); // 4
// ---

// To circumvent this, use let to create the loop var

// ---
// for (let ii = 0; ii <= 3; ii++) {
//     console.log(ii);
// }

// console.log(`Current value of ii is ${ii}`); // error
// ---

// From the two examples above, var keyword creates a var that extends outside all blocks
// But does var extends outside functions?

function doesVarLeaksOutsideOfFunction() {
    var varToBeLeaked = true;
}

doesVarLeaksOutsideOfFunction();
console.log(varToBeLeaked); // error

// This means that var does not leak outside of function scopes










