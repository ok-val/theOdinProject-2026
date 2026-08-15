function wip(n, a = 0, b = 1, res = [a]) {
    if (n <= 1) {
        return res;
    }
    res = res.concat(fibonacci(n - 1, b, a + b, (res = [b])));
    // b;
    // n;
    // res;
    return res;
}

function fibonacci(n, a = 0, b = 1, res = [a]) {
    if (n <= 1) return res;
    return res.concat(fibonacci(n - 1, b, a + b, (res = [b])));
}

const res = fibonacci(10);
res;
