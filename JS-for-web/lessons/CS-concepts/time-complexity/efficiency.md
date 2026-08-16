# Efficency basics

> Key Question: How to measure efficiency of algos?

Consider this function:

```js
function oddNumbersLessThanTen() {
    let cur = 1;
    while (cur < 10) {
        if (cur % 2 !== 0) console.log(cur);
    }
    cur += 1;
}
```

The speed in which this function runs depends entirely on the specs of
your hardware and it's not a reliable measure of efficiency.

> The way is to measure how many steps it takes to complete.

The less steps a program has to run to complete the same task, the more
efficient it is, and vice versa.

If we count every step (including checking bools, declaring vars,
logging something, doing calculations) of the function above, we get
34 steps.

We can say that `oddNumbersLessThanTen()` is an algo that takes 34 steps.

But our function is static, if we start to pass args as dynamic vars
to this function, the steps would certainly change.

Thus, we use a more abstractable measure, and it is called:

> Asymptotic notations (Big O)

## Asymptotic Notations (Big O)

Asymptotic notations are used to describe the running time of an algo.
Because an algo running time can different depedning on the input, there
are several notations that measure that running time in different ways.

Here are the most common 3 notation families that rep different cases:

- **Big O Notation:** the upper bound --- the worst case;
- **Omega Notation:** the lower bound --- the best case;
- **Theta Notation:** both upper + lower --- the average case;

## Why is Big O one of the most common notation?

Because Big O represents the worst case scenario for algos.
