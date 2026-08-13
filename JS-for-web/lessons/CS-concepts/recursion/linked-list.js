// LINKED LIST

// Imagine I want to store an ordered list of objects.
// For which the natural choice would be an array:

// let arr = [obj1, obj2, obj3];

/**
 * However, once this array gets larger too the thousands, operations
 * like .shift() and .unshift() gets computationally expensive for
 * relying on re-indexing... Better to use .pop() and .push(), limiting
 * us to LIFO methods only.
 */

// For fast list insertion/deletion, choose LINKED LIST

// WHAT'S A LINKED LIST?
/**
 * An object (literally...) with a recursive structure containing these
 * members:
 * * `value`, followed by
 * * `next` property referencing the next element or null (at the end)
 *
 * Optional enhancing properties:
 * * `prev`: to move backward
 * * `tail`/`head`: to reference the first / last element of the list
 */

let linkedList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
};

console.log(linkedList.next);
console.log(linkedList.next.next);
console.log(linkedList.next.next.next);

/**
 * This means that each element of the list could easily be split and
 * joined back together later.
 */

// CON: A linked list removes indexing altogether...
console.log(linkedList[0]);

// PRO: It makes appending and, particularly, prepending much faster
// Appending:

linkedList.next.next.next = { value: 4 };
linkedList.next.next.next.next = { value: 5 };
console.log(linkedList.next.next.next);

// Prepending:
linkedList = { value: 0, next: linkedList };
console.log(linkedList);

// Removing value from the middle:
linkedList.next = linkedList.next.next; // remove {value: 1}
console.log(linkedList);
