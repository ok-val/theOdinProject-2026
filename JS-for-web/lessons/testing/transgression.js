const userOrder = {
    items: [
        { name: 'Watermelon', price: 8, quantity: 8 },
        { name: 'CPU', price: 800, quantity: 2 }
    ]
};

const calcTotal = order => {
    return order.items.reduce(
        (acc, cur) => (acc += cur.price * cur.quantity),
        0
    );
};

const userTotal = calcTotal(userOrder);
userTotal;

/**
 * Consider this code, and how it will get more complex with more
 * features over time, like payment APIs, shopping cart, filters,
 * shipping conditions, and so on.
 *
 * Right now, I'm tracking all of the these features and variables in
 * my head. At some point, it would get out of hand.
 *
 * To implement TDD, I should have strated with a SPEC before I even
 * write any code at all!
 *
 * For each code, I should ANSWER or CONSIDER the following questions/
 * components:
 * 1. Input shape: What does the new function take as input?
 * 2. Output shape: What does the function return as output?
 * 3. Edge cases: What are the circumstances where i/o could go wrong?
 * 4. Side effect/State mutation: Should the function be pure or impure?
 *
 * This forces to become our own manager.
 */
