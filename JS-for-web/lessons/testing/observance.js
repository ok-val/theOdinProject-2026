/**
 * In transgression.js, I started coding without TDD
 * Here, I'm going to follow TDD.
 * Here's a manual version that uses no testing systems
 */

const userOrder1 = {
    items: [
        { name: 'Watermelon', price: 8 },
        { name: 'CPU', price: 800 }
    ]
};

const userOrder2 = {
    items: [
        { name: 'Apple', price: 4 },
        { name: 'GPU', price: 1800 }
    ]
};

const userOrder3 = {
    items: [
        { name: 'Apple', price: 4, quantity: 5 },
        { name: 'GPU', price: 1800, quantity: 2 },
        { name: 'Carrot', price: 20 }
    ]
};

function calcTotal(object) {
    /**
     * Each of these requirements should be a test!
     * Input: an object with property `items` that contains a list of objects
     * Input data/shape: For they might change
     * Output: a positive number
     * Error catch: naming incongruency, object shape incongruency,
     * negative number, empty item name strings
     * Side effect: No
     */

    return object.items.reduce((acc, cur) => {
        let quantity = cur.quantity === undefined ? 1 : cur.quantity;
        return (acc += cur.price * quantity);
    }, 0);
}

// Here's the manual test
// Have a few cases where to trigger the requirements for this function
// Input data variation #1
if (calcTotal(userOrder1) !== 808) {
    console.error('Test failed #1. Change the code');
    // Input data variation #2
} else if (calcTotal(userOrder2) !== 1804) {
    console.error('Test failed #2. Change the code');
    // Input shape variation #2
} else if (calcTotal(userOrder3) !== 3640) {
    console.error('Test failed #3. Change the code');
} else {
    console.log('Test passed! Time for the next requirement.');
}

// This testing is refactored in ./tests to use Jest
