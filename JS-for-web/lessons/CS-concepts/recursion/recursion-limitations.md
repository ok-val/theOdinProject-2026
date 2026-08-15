# Limtations of recursion patterns

When using recursion (a subset of D&C algorithm), I must make sure that
there is sufficient memory allocated for the recursion stack.

A recursion pattern that would potentially call itself 15000 times may
cause STACK OVERFLOW, a situation where calls exceeds the max stack size
allowed by JS. In which case, it's probably better to use for loops and
some pointers.

To lessen the effect of high recursion on memory, I should start by
limiting the number of parameters and local variables when recursive
call would make. Then look for more base cases to exit the recursion, or
to exec further programs non-recursively, or to employ less intensive
recursive operations to handle the rest.
