## What is Big O?

> Big O is one of the families of notations that contains complexity
> classes such as O(1), O(n), and so on.

Here are those complexity classes, sorted from fastest to slowest, where
N scales with data:

| Rank | Notation   | Complexity  |
| ---- | ---------- | ----------- |
| 1    | O(1)       | Constant    |
| 2    | O(log N)   | Log         |
| 3    | O(N)       | Linear      |
| 4    | O(N log N) | N log N     |
| 5    | O(n**2)    | Quadratic   |
| 6    | O(n**3)    | Cubic       |
| 7    | O(2**n)    | Exponential |
| 8    | O(N!)      | Factorial   |

Big O is something that requires you to measure how the number of steps
change with the input data because N scales with the data.
