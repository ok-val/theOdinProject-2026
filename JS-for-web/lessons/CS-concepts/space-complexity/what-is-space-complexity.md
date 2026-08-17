# Space Complexity

## What is space complexity?

The metric for total memory space used by an algo relative to the size
of the input (to include or exclude the input).

Here are the spaces considered for space complexity:

1. Input space
2. Auxiliary space: the working space used by the algo to output,
   garbage-collected once the stack finishes running

## Why is it important?

The majority of discussion about complexity tends to conflate time and
space complexity or just underlooks space complexity.

Whereas time complexity considers the time constraints, space complexity
works with space constraints. There will be problems where space is
limited where this knowledge comes in handy.

## How to measure it?

It uses the same notation as time complexity and Big O is also preferred
to look at worst-case scenarios.

Just like measuring Big O in [[measure-big-O.md]], I would lay out the
steps, drop the constants and non-scaling factors, and get the worst
case answer. So if I have a space complexity of O(N) + 3 auxiliary vars,
the big O for space is thus O(n).

## Complexity case examples

### O(1) -- Constant space

```js
function multiply(a, b) {
    return a * b;
}
```

Same two vars for every run!

### O(N) -- Linear space

```js
function sumArr(arr) {
    let sum = 0;
    // iterate thru every item using for loop
    return sum;
}
```

Cases involved:

- let, return: O(1)
- for loop (let): O(N);
  => Worst case: O(N)

> [!note] Auxiliary space analysis
>
> Auxiliary space analysis deals with muddy cases that either uses the
> space taken by the original data or a new space altogether.
>
> Whereas traditional space analysis covers the TOTAL space footprint,
> Auxilliary space analysis entirely ignores the input space. However,
> if the algo makes a copy of that original data, then new data is
> obviously considered.
>
> Consider these cases:
>
> ```js
> function squareNumsInPlace(arr) {
>     for (let i = 0; i < arr.length; i++) {
>         arr[i] = arr[i] * arr[i];
>     }
>
>     return arr;
> }
>
> function squareNumsNewArr(arr) {
>     return arr.map(number => number * number);
> }
> ```
>
> One of them mutates the original, the other creates a new array.
> Traditional space analysis would say that both take O(N) space.
> Auxilliary space analysis would say that:
>
> - The first take O(1) (for storing i) and the original data just gets
>   replaced by the new data.
> - The second takes O(N) for returning new data for every return.

## Lower level space complexity

Space analysis differs at different computational levels because space
allocation gets more procedural at lower level.

The number of steps depends on what you are counting and what unit.
Sometimes it's useful to count integers, sometimes bits.
Sometimes, it's useful to count the times an algo accesses memory.
Sometimes it's the times it modifies a memory.
For auxilliary analysis, it counts only new memory that is allocated at
running time.
