// In scope.js, I covered the basics about scopes
// We basically asks "where are my vars and function available to me?".

// So far, I've discovered global scope and local scopes
// * Global-scoped: var created outside of anything and is accessible by everyone.
// (yes, even other scripts)
// Within local scopes (I think it would subsume anything else but global scope),
// * Function-scoped: var created in a function
// * Block-scoped: var created in a block (i.e., if, while, for)
// * Private-scope: var created in a factory function, used by inner functions, not returned explicitly

// For example, a function-scoped variable is created in a function and is only available to codes 
// in that function.


// ------------------------------------------------ //
// GLOBAL SCOPE
// ------------------------------------------------ //
// Every global var belongs to the `window` object.
// I know this because I can use window.sayHello() to call this function

// function sayHello() {
//     console.log('Hello Window');
// }

// window.sayHello(); // 'Hello Window'

// CONST and LET do not attach vars to WINDOW, but VAR does.
// This is an interesting fact about const and let.

// ---
// const varByConst = 'foo';
// let varByLet = 'bar';
// var varByVar = 'fee';
// ---

// Let's see which one is attached to `window`

// ---
// console.log(window.varByConst); // undefined
// console.log(window.varByLet); // undefined
// console.log(window.varByVar); // 'fee'
// ---

// The general consensus is not to create global vars anyways.


// ------------------------------------------------ //
// FUNCTION SCOPE
// ------------------------------------------------ //

// ---
// const thingA = 'AAA';
// function saySomething() {
//     const thingB = 'BBB';
//     console.log(thingA, thingB);
//     console.log();
// }

// saySomething(); // AAA BBB
// console.log(thingB); // throws an undefined error
// ---

// Variables, if not found inside a function, will go up ONE level higher to look for a var in that scope
// If still not found, it will go up a level higher. This process is recursive.

// So since thingB is not found by window by going up a level higher (there's no level higher),
// browser returns undefined error

// SHADOW VAR is a variable that is defined using the same name as its outer counterpart. 

// ---
// const thingC = 'CCC';
// function saySomething() {
//     // this shadow var is redefined inside this function
//     // the outer var has been overwritten in this example
//     const thingC = '333'; 
//     console.log(thingC);
// }
// console.log(thingC); // CCC
// saySomething(); // 333
// ---

// Don't do this. Be more specific with the naming for inner declarations.

