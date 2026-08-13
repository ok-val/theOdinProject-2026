/**
 * The task is to write a function factorial(n) that calculates n! using
 * recursive calls.
 */

function factorial(n) {
    if (n <= 1) return n;
    return n * factorial(n - 1);
}

const res = factorial(5);
// res;

/**
 * Write a function fib(n) that returns the n-th Fibonacci number.
 * First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3)
 * and so on: 1, 1, 2, 3, 5, 8, 13, 21....
 */

// My solution: okay fast, but hogs up lots of memory at higher n-th
// CONS: Recursion at 15000+ exceeds the max call stack size
// This is space complexity O(n)
function fib(n) {
    // let's hold some constant or init vars
    let init = [1, 1];

    function accumulate(n) {
        if (n <= 2) {
            return init.at(-1);
        }
        init.push(init.at(-1) + init.at(-2));
        return accumulate(n - 1);
    }

    return accumulate(n);
}

const res1 = fib(77);
res1;

// This is the counter-example, creating lots of redundancy
function fib1(n) {
    if (n <= 1) {
        return n;
    } else {
        n;
        return fib1(n - 1) + fib1(n - 2);
    }
}

// This is the solution provided, using 2 pointers
// Holding only 4 vars at any given point
// PROS: For loops avoid the aforementioned call stack size limitation
// Space complexity O(1)
function fib2(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

const res2 = fib2(77);
res2;

// Alternatively, here's the pure functional approach. MAX FLEX!!!!
function fib3(n, a = 1, b = 1) {
    if (n <= 2) return b;

    // Pass the new state forward instead of mutating variables
    return fib3(n - 1, b, a + b);
}

const res3 = fib3(77);
res3;
