/**
 * Write a recursive function collatz(n) that calculates how many steps
 * it takes to get to 1 if you start from (n)
 */

function collatz(n, acc = 0) {
    if (n === 1) return acc;
    // if (n % 2 === 0) {
    //     return collatz(n / 2, acc + 1);
    // } else if (n % 2 !== 0) {
    //     return collatz(3 * n + 1, acc + 1);
    // }

    return n % 2 === 0 ? collatz(n / 2, acc + 1) : collatz(3 * n + 1, acc + 1);
}

const res = collatz(3);
res;
