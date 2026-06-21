// -----------------------------
// LEXICAL AND STATIC SCOPING
// -----------------------------

const dog = 'wiggle';

function logDog() {
    console.log(dog);
}

function shadowAndLogDog() {
    // create shadow var
    const dog = 'tickle';
    logDog();
}

// It's natural to expect that logDog() is going to assume the function var (shadowed from a global var)
// And would return 'tickle'. 

// However, this is not the case
shadowAndLogDog(); // 'wiggle'


// This is because functions look up variables on the SAME SCOPE where the function was defined,
// not where the function is run.

// In my initial guess, I refactored logDog() into shadowAndLogDog() as a nested structure, like so:

// function shadowAndLogDog() {
//     const dog = 'tickle';
//     // refactored from logDog()
//     console.log(dog);
// }

// This is not how JS works for callback scope.
// When called back, JS literally returns to logDog declaration and runs it from there.
// Bypassing local scoping



