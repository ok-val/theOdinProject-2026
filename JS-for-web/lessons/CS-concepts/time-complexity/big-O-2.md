## Big O from a bird's eye view

Big O specifically looks at the BIG PICTURE worst-case scenario of an
algo at scale.

It tells us how long function takes or the space it takes in memory
as the input to that function approaches INFINITY.

## What is space complexity and time complexity

| Complexity | Meaning                                                                  |
| ---------- | ------------------------------------------------------------------------ |
| Time       | Analyzing how the runtime of an algo changes as the input increases      |
| Space      | The space in memory required by the algo to run (relative to input size) |

> [!note] Usual trade-off between space and time complexity
> To increase the speed of an algo, you'll likely need to store more
> vars in memory space.

## Big O and built-in JS functions

`.pop()` and `.push()` performs at O(1) because they work at the end of
arrays and does not reindex the arrays.

`shift()` and `unshift()` performs at O(n) because they work at the
beginning of arrays and require reindexing for each of the array item.
(Linked list is thereby preferred for large datasets.)
