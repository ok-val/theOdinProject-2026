## What is Big O?

> Big O is one of the families of notations that contains complexity
> classes such as O(1), O(n), and so on.

Here are those complexity classes, sorted from fastest to slowest, where
N scales with data:

| Rank | Notation   | Complexity  | Meaning *             |
| ---- | ---------- | ----------- | --------------------- |
| 1    | O(1)       | Constant    | 1                     |
| 2    | O(log N)   | Log         | + 1 for N * 2         |
| 3    | O(N)       | Linear      | + N for N + N         |
| 4    | O(N log N) | N log N     | + N * log N for N * 2 |
| 5    | O(n**2)    | Quadratic   |
| 6    | O(n**3)    | Cubic       |
| 7    | O(2**n)    | Exponential |
| 8    | O(N!)      | Factorial   |

Big O is something that requires you to measure how the number of steps
change with the input data because N scales with the data.

> [!note] DON'T THINK LOW LEVEL (*)
> The trick to thinking about categorizing which complexity my code
> belongs to requires abstraction of how each command works.
> In reality, there are lots of things that happen in the binaries, the
> low level implementation that make my code works.
>
> In the example below, `arr[0]` is a code that requires a few kernel-
> level happenings, like accessing memory, writing to a new memory block
> so in total it may take like 10 Assembly lines. However, it would
> still take the same 10 ASM lines regardless of `arr` or `arr1`.

### O(1) -- Constant complexity

If you can get things done in **ONE** step, that's O(n).

```js
arr = [1, 2, 3];
arr1 = [1, 2, 3, 4, 5, 6, 7];
const res = arr[0];
```

Regardless of the element count, the lookup square notation would always
return `res` in ONE step, thus it is considered O(1).

### O(log N) -- Logarithmic complexity

(log base 2 --- binary)

| N (data size) | log N (steps) |
| ------------- | ------------- |
| 1             | 0             |
| 2             | 1             |
| 4             | 2             |
| 8             | 3             |
| 16            | 4             |
| 512           | 9             |
| 1024          | 10            |

As the data doubles, steps increments by one. Still pretty good, since
moving from 512 to 1024 just takes one additional step.

An example in this category is Binary Search. It is a D&C algo and by
nature it is a two-way split and compare. The step that would scale
would be the number of times the algo would need to divide the array in
halves. So for an array of 8, it would do 3 divisions. For 0-length arr,
do none...

### O(N) -- Linear complexity

For N amount of data, do something Nth times.
This is the complexity of every for loop.

### O(N log N) -- N Log N complexity

This is Linear * Log N. Applies for algos that combines some binary
operations with some linear ones.

Think of the two-way Merge Sort algo:

1. For an array of 8, divide 3 times;
2. For each of the resulting 8 divisions, sort while merging back the
   three divisions (+ 8 * 3);

While a two-way merge sort explicitly uses these O(N) and O(log N) parts
some algos behaves this way without using them explicitly.
