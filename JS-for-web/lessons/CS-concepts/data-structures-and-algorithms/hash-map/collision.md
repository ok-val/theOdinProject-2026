# Collisions

A collision in HashMap occurs when two different keys generate the same
hash code. This causes different data to land in the same bucket.

For example, `Sara` and `raSa` may generate the same code given a hash
function that hasn't really considered collisions.

To solve this issue, we can rework our hash function to make the hash
codes more informative:

```js
function stringToNumber(string) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < string.length; i++) {
        // hashCode += string.charCodeAt(i);
        hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }

    return hashCode;
}
```

> [!tips] Minimizing collisions using Prime numbers
>
> The use of prime number here is smart! Multiplying by a prime will
> reduce the likelihood of a hash codes being evenly divisible by the
> bucket length.

Regardless, there are countless possibilities in which collisions will
come up. A good hashing function is not only pure, but also consider the
type of input that it hashes and employs strategies to minimize
collisions.

Employing other ADTs is a helpful way to minimize collisions as well.
Each bucket could store a singly-linked list, where if a collision
occurs, we could simple insert the new node at the head/tail of the
linked list.

This would make the Hash Map two-dimensional.
