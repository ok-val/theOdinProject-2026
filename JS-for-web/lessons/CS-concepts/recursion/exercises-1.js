// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

function sumToLoop(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

const res = sumToLoop(4.2);
res;

// Second fast: 4 stacks
function sumToRecr(num) {
    if (num <= 1) {
        return num;
    }
    return num + sumToRecr(num - 1);
}

const res1 = sumToRecr(4.2);
res1;

// The arthimetic approach is the fastest here, one stack
function sumToArth(num) {
    return (num * (1 + num)) / 2;
}

const res2 = sumToArth(4.2);
res2;
