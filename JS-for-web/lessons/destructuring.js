// Destructuring is another expression to unpack or extract values from an object or array

// When I have an object, I can extract a property of an object into variable of the same name.

const obj = { a: 1, b: 2 };

const { a, b } = obj;
// I've seen this in Python where you assign multiple variables at the same time.
// It's a equivalent of doing this:
// const a = obj.a;
// const b = obj.b;

// console.log(a);
// console.log(b);


// I can also do the same thing for arrays:
// Using square bracket notation to match array expression.
const arr = [2, 3, 5, 7];

const [first, second, third, fourth] = arr;

// console.log(first);
// console.log(fourth);


// I could also nest the two expressions

const listOfObj = { x: 11, y: {z: 17} };

const {
    x, 
    y,
} = listOfObj;

console.log(x);
console.log(y);
