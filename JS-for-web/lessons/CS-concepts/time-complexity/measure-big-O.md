---
sources: https://www.sahinarslan.tech/posts/step-by-step-big-o-complexity-analysis-guide-using-javascript
---

# Big O analysis guide

## Procedure

In real world applications, fns/algos will look messy; they'll have
nested functions, locally scoped vars, mutating vars.

Because Big O aims to make generalizations about complexity (as input
to the fns/algos approach infinity), we want to REDUCE.

> [!important] Three steps to Big O simplification
>
> 1. Break fns down into individual operations
> 2. For each operation, calculate Big O
> 3. Chain the Big Os of the operations combined

## Mindset

1. Drop the constants
2. Drop non-scaling terms
3. Answer === worst case
   If we a combined result of: O(10000N) and O(n^2); Ans: O(n^2)

## Time complexity of Native JS operations

Whenever I encounter one of these in an algo, add it to the Big O chain.

| Category           | Block / Method                                         | Time Complexity |
| ------------------ | ------------------------------------------------------ | --------------- |
| **Standard Loops** | `for`, `while`, `do-while`, `for...of`, `for...in`     | **O(n)**        |
|                    | **Nested Loops**                                       | **O(n²)**       |
| **Arrays**         | Index Access (`arr[i]`)                                | **O(1)**        |
|                    | `.push()`, `.pop()`                                    | **O(1)**        |
|                    | `.shift()`, `.unshift()`                               | **O(n)**        |
|                    | `.forEach()`, `.map()`, `.filter()`, `.reduce()`       | **O(n)**        |
|                    | `.find()`, `.some()`, `.every()`                       | **O(n)**        |
|                    | `.indexOf()`, `.includes()`                            | **O(n)**        |
|                    | `.splice()`, `.slice()`, `.concat()`                   | **O(n)**        |
|                    | `.sort()`                                              | **O(n log n)**  |
| **Objects**        | Property Access, Insert, Delete (`obj.key`)            | **O(1)**        |
|                    | `Object.keys()`, `Object.values()`, `Object.entries()` | **O(n)**        |
| **Maps & Sets**    | `.get()`, `.set()`, `.add()`, `.has()`, `.delete()`    | **O(1)**        |
