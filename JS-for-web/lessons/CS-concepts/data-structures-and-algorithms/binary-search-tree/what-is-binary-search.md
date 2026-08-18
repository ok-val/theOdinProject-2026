# Binary Search ADT

Binary search is a family of algorithms that uses D&C to find a specific
element inside a _sorted_ array or _ordered_ list.

Pseudocode:
Repeat until the sub-arr.length === 0;

1. Calculate the midpoint of the current arr
2. If target == median, return res
3. Otherwise, divide the arr into two partitions
   (exclude median if arr.length is odd)
    - If target < median, repeat partition and search in Left partition;
    - Else, repeat partition and search in Right partition.
