// What does scope mean?
// Scoping essentially asks: "Where is certain variable available to me?". 
// It indicates the current context of a variable. 

// When a function is not declared within a block (enclosed by curly braces) {}, 
// they are globally scoped.
// Otherwise, they are locally scoped. 

// A global variable
let globalAge = 23;

function printAge(age) {
    // A function-scoped variable
    var functionAge = 52; 

    if (age > 0) {
        // A block-scoped variable
        // exists inside this if block
        const blockAge = 39;
        console.log(blockAge);
    }
}

console.log(globalAge); // 23
console.log(functionAge); // Error!
console.log(blockAge); // Error!

