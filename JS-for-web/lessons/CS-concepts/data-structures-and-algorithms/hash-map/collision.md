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
> The reason why 31 is preferred is a mixture of tradition,
> computational efficiency, and even distribution.
> sources: https://stackoverflow.com/questions/299304/why-does-javas-hashcode-in-string-use-31-as-a-multiplier/299748

## What makers a good hashing function?

Source: https://samwho.dev/hashing/

Because the input can be anything, but the number returned is always
within some predetermined range, it's always possible that two different
inputs can return the same hash code.

It is not possible to eliminate collision.

Regardless, there are countless possibilities in which collisions will
come up. A good hashing function is not only pure, but also consider the
type of input that it hashes and employs strategies NOT to minimize
collisions, but a better model is to control the collisions so that
they spread out evenly.

Employing other ADTs is a helpful way to minimize collisions as well.
Each bucket could store a singly-linked list, where if a collision
occurs, we could simple insert the new node at the head/tail of the
linked list. This would make the Hash Map two-dimensional.

The article also covers how hash function can be benchmarked using
preordered or random inputs.
