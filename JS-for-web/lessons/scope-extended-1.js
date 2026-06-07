// continued from scope.js and scope-extended.js

// ------------------------------------------------ //
// BLOCK SCOPE
// ------------------------------------------------ //

// Besides from functions, blocks are also defined by the { curly braces }.
// Think of these { curly braces } like gates and these gates keep the variables inside from
// being accessible outside. 

// for example

// ---
if (true) {
    let blocked = true;
    const BLOCKED = true;
    var notBlocked = true;
}

// console.log(blocked); // undefined error
// console.log(BLOCKED); // undefined error
// console.log(notBlocked); // true 
