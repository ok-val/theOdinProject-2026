/**
 * From which-object-is-class.js, I learned that class basically creates a function constructor
 * This is why many people consider classes to be "syntactic sugar" (syntax designed to make
 * things easier to read, but doesn't introduce anything new).
 */

// Still there are important differences:

// 1. Classes are labelled with a special property call [[IsClassConstructor]]: true
// This property is helpful because it does NOT allow the class constructor to be called
// without the new keyword 

function Candy() {
    // some code here
}

let candy1 = Candy(); // no error caught
Candy(); // no error caught


class Cake {
    constructor() {
        // constructor code here
    }
}

let cake1 = Cake(); // error caught immediately


/**
 * 2. Class methods are not enumerable. The Enumerable flag is set to false for all methods 
 * and data properties in the prototype. Thus, classes cannot be treated like objects in loops.
 */

/**
 * 3. Classes always `use strict` so that all code inside the class construct is automatically
 * in strict mode. This restricts the context of this for local scoping.
 * (At this point, I'm unsure how this can be useful)
 */


