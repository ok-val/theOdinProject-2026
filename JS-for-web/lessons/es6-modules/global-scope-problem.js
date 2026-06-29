// Before ES6 modules, we use IIFE to prevent top-level vars of one script
// from being unintentionally accessed by another.

// Let's say we have two scripts, one.js and two.js for our index.html,
// We would have to hook them up as follow:

{/* <script scr="one.js" defer></script> */}
const greeting = "Hello there!";
{/* <script scr="two.js" defer></script> */}
console.log(greeting);


// When index.html is loaded, we see greeting getting logged on the DOM console,
// behaving as if the two scripts are one and the same.

// This could pose problems if we want to control the visibility of our top level vars.

// Instead, IIFE (immediately-invoked function expression) comes to the rescue.

const greeting1 = (() => {
    const greetingString = "Hello bear!";
    return greetingString;
})();

// Good, now we have more protection for our top-level vars.  
