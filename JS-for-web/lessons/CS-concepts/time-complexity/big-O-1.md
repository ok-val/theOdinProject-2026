## Alternatives to Big O

Big O shows the worst case for how an algo would scale.

### Big Omega (Best case notations)

Consider this algo:

```js
function findValue(arr) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (item === 1) {
            return item;
        }
    }
}
```

This algo would have O(N) linear complexity in using a for loop once.
But Big O assumes that the algo returns the item in the last step.

As opposed to Big O, Big Omega assumes that the algo returns the item
in the first step. Thus in the best case scenario, the algo has a time
complexity of Omega(1).

### Big Theta (Average/Exact case notations)

Big Theta looks at the range between the upper and lower bounds,
or the exact value.

If some code loops through every single items of an array (like
`Array.forEach())`). Big O, Omega, and Theta would all be the same: O(N)

## Why Big O?

To reiterate, considering the worse case scenario for how an algo would
scale is the most helpful to design algos that would NOT take FIVE
BILLION steps to return something on a user's computer.

### Big O doesn't concern the exact number or constants involved

Consider these two examples:

```js
// Exhibit A
function oddNumbers(maxNumber) {
    let currentNumber = 1;

    while (currentNumber < maxNumber) {
        if (currentNumber % 2 !== 0) {
            console.log(currentNumber);
        }
        currentNumber += 1;
    }
}

// Exhibit B
function oddNumbers(maxNumber) {
    let currentNumber = 1;

    while (currentNumber < maxNumber) {
        if (currentNumber % 2 !== 0) {
            console.log(currentNumber);
        }

        currentNumber += 2;
    }
}
```

Again, Big O doesn't concern the nitty gritty. It's obvious to us that
B would take less steps O(N/2) vs. A at O(N), or maybe even C at O(2N).
That's why we have Big Theta.

As long as the complexity flunctuates within one of these cases:

| Rank | Notation   | Complexity  | Meaning *             |
| ---- | ---------- | ----------- | --------------------- |
| 1    | O(1)       | Constant    | 1                     |
| 2    | O(log N)   | Log         | + 1 for N * 2         |
| 3    | O(N)       | Linear      | + N for + N           |
| 4    | O(N log N) | N log N     | + N * log N for N * 2 |
| 5    | O(n**2)    | Quadratic   | * N for N + 1         |
| 6    | O(n**3)    | Cubic       | * N * N for N + 1     |
| 7    | O(2**n)    | Exponential | ** 2 for N + 1        |
| 8    | O(N!)      | Factorial   | !N for for N + 1      |

Big O considers the both A & B under the same umbrella. You either
step up an entire complexity class or you don't.

The step between these cases are significant enought that they won't
overlap. Consider O(10N) as permutation of O(N).

| N   | O(10N) | O(n**2) |
| --- | ------ | ------- |
| 1   | 10     | 1       |
| 5   | 50     | 25      |
| 100 | 1000   | 10,000  |

Now consider the worst case possible... It gets bad pretty quickly.

There are cases when working with quadratic complexity may be faster
than linear complexity. But those cases are for fixed set of input.
