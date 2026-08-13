// Recursion is the idea that function calls itself.
/**
 * Recursion is a pattern in programming where a function calls itself
 * at some point in the code.
 */

/**
 * Recursion is not the same as iteration.
 *
 * Iteration uses for loops; Recursion uses its own function.
 */

function powIter(base, pow) {
    let res = 1;
    for (let i = 0; i < pow; i++) {
        res *= base;
    }
    return res;
}

const resIter = powIter(2, 3);
resIter;

// After some struggle: My solution...
function powRecr(base, res, pow, i) {
    if (i < pow) {
        return powRecr(base, base * res, pow, i + 1);
    }
    return res;
}

const resRecr = powRecr(2, 1, 3, 0);
resRecr;

// JS.info solution: ELEGANT!
// Uses a countdown method
function powRecr1(base, pow) {
    if (pow == 1) {
        return base;
    }
    return base * powRecr1(base, pow - 1);
}

const resRecr1 = powRecr1(2, 3);
resRecr1;
