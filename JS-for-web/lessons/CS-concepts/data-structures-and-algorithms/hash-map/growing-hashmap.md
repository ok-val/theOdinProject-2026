## Growth of a hash map

The number of buckets depends on the memory your system has.
When we receive a hash code, say 135089235, that certainly shouldn't be
our index for a value that exists at that position.

Many programming languages start with the default size of 16 to allocate
a memory for a hashmap. Internally, when given a high hash map value,
the hash code turns into an index via a modulo operator `%` to return
the remainder.

Given indices at a smaller range, collisions is highly likely.

To reduce the linked list stacked nodes inside a single bucket, we need
to grow our hashmap. We do this by:

> Creating a new hashmap double the size of the original one, and
> rehashing all of the current nodes to the new one.

## How to know when to grow?

The hashmap itself needs to keep track of two fields:

1. **Capacity**: The total number of buckets we currently have
2. **Load factor**: Sort of the average of nodes spread across buckets.
   This number is assigned to the hashmap at the start. Most
   programming languages use a load factor between `0.75 and 1`.

The product of these two numbers gives a new number. We can treat this
number as a decision threshold for when we need to expand.
