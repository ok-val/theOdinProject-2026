import calcTotal from './calcTotal.js';

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

test('#1: Input data variation', () => {
    expect(calcTotal(userOrder1)).toBe(808);
});

test('#2: Input data variation', () => {
    expect(calcTotal(userOrder2)).toBe(1804);
});

test('#3: Input shape variation', () => {
    expect(calcTotal(userOrder3)).toBe(3640);
});

// if (calcTotal(userOrder1) !== 808) {
//     console.error('Test failed #1. Change the code');
//     // Input data variation #2
// } else if (calcTotal(userOrder2) !== 1804) {
//     console.error('Test failed #2. Change the code');
//     // Input shape variation #2
// } else if (calcTotal(userOrder3) !== 3640) {
//     console.error('Test failed #3. Change the code');
// } else {
//     console.log('Test passed! Time for the next requirement.');
// }
