// Source: https://www.youtube.com/watch?v=ngCos392W4w

// 1. Identify the base case

function sumTo(n) {
    // Here's the base case / exit clause
    if (n <= 1) return n;
    // And the recursive case
    return n + sumTo(n - 1);
}

const res = sumTo(10);
// res;

// 2. Chart the permutations and cases
// Identify what are the relationship between the cases
// THIS IS THE HARDEST PART!

// 3. Start with 0,1,2 as inputs

/**
 * Exercise: Write a function that takes two inputs n and m and outputs
 * the number of unique paths from the TOP LEFT to the BOTTOM RIGHT
 * corner. The path could only take one move right or down at a time.
 */

function calcUniquePaths(n, m) {
    if (n === 1 || m === 1) {
        return 1;
    }
    const a = calcUniquePaths(n - 1, m);
    const b = calcUniquePaths(n, m - 1);
    return a + b;
}
const res1 = calcUniquePaths(3, 5);
res1;
