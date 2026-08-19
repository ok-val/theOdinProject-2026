# HashMap

## What is a HashMap?

_Alias_: Hash table

A has table is DS that implements an associative array (aka dictionary
or simple map) --- the ADT that maps keys to values.

A hash map uses a hash function compute an _index_ (hash code) into an
array of _buckets or slots_, from which stored value can be retrieved.

> input -> hash code (index) -> bucket/slot -> key-value pair

Therefore, a hashmap is similar to a conventional array, except for
having a key that gets computed into index.

## What does _hashing a value_ into a Hash Code mean?

The hasing process:

> Input --> [Hash function (pure)] --> Corresponding output

The hashing function should be a pure function, meaning the same input
should always resolve the same output. No side effects, no states.

> [!note] Hashing vs Ciphering
>
> While ciphering is a two-way process---enciphering and deciphering,
> hashing is a one-way process: Output does not reverse to Input.

```js
function hashFirstChar(name) {
    return name.charAt(0);
}
```

This is a basic hashing function, the output is called a **Hash Code**.

Thus, hashing has security benefits. Given a hashed passwords, there is
no way to reverse it back into the original string.

## Use cases

Think of folder organization where each folder holds files on people
with the same letter last name.

If we get a new student in our school with the name "Val", we can run
the hash function to get the Hash Code "V", which thereupon, we can use
to put "Val" in the "V" folder.

But what if we have too many "Val"s? In which case we could consider a
more informative hash code. Perhaps, use their first name? Class year?

```js
function hash(name, surname, year) {
    return name.charAt(0) + surname.charAt(0) + year.toString().charAt(-1);
}
```

So for someone like "Val Nguyen", graduating class 2026, we have the
hash code VN6. But what if this is still insufficient? Let's convert
string into numbers now:

```js
function stringToNumber(string) {
    let hashCode = 0;
    for (let i = 0; i < string.length; i++) {
        hashCode += string.charCodeAt(i);
    }

    return hashCode;
}

function hash(name, surname) {
    return stringToNumber(name) + stringToNumber(surname);
}
```

Calling hash will now gives a unique number. The reason why we add the
numbers together is in order to return a unique number.

This number will serve as the INDEX to the BUCKET/SLOT that will store
our KEY-VALUE pair.
