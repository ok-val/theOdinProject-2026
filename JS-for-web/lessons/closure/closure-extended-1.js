// ----------------------------
// CLOSURE EXTENDED
// ----------------------------

// Example 2

function createGame(name) {
    let score = 0;

    // Use this syntax when having multiple things to return
    // IMO this is more readable
    function win() {
        score += 1;
        return `${name} score: ${score}`;
    }
    return { win };

    // Use this syntax to return a single function everytime
    // Use `console.log(hockeyGame());` to run it afterwards
    // return function() {
    //     score ++;
    //     return `${name} score: ${score}`;
    // }

}

const hockeyGame = createGame('Hockey');

console.log(hockeyGame.win());
console.log(hockeyGame.win());
console.log(hockeyGame.win());

// What's happening under-the-hood is that WITHIN this outer function:
// An inner function and a var are created in the same scope.
// The var is function-scoped, so it does leaked to the global scope.
// The inner fn gets access to the var via lexicon / static scoping. Ergo, it doesn't reach global scope.
// Whenever the outer function is called, the fn and var are initialized; both do not reach or leak to
// global scope, thus achieving closure.
// When the inner function is called, it access a shadowed var that was initialized once.
// This var cannot be accessed by window, and thus impermeable to garbage-collection.
// The function cannot access any other vars except for the given one due to lexical / static scoping.
// This is the concept closure because both ends are closed. 
