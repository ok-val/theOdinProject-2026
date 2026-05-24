// PART 1 -- Working with Prototypes

let animal = {
    jumps: null,
};

let rabbit = {
    __proto__: animal,
    jumps: true,
};

console.log(rabbit.jumps); // true

delete rabbit.jumps;
console.log(rabbit.jumps); // null

delete animal.jumps;
console.log(rabbit.jumps); // undefined

// What I learn is that when an object inherits from a prototype,
// it can overwrite the prototype's property.
// When this overwriting is deleted,
// it will use the property from its prototype.
// When this property from the prototype is deleted,
// the property no longer exists and will return undefined. 

// PART 2 -- Searching algorithms

let head = {
    glasses: 1
};

let table = {
    __proto__: head,
    pen: 3,
};

let bed = {
    __proto__: table,
    sheet: 1,
    pillow: 2,
};

let pockets = {
    __proto__: bed,
    money: 2000,
};

console.log(pockets.pen);

// Question: Is it faster to get glasses from pockets.glasses 
// or head.glasses?

console.log(pockets.glasses);
console.log(head.glasses);

// According to jsbench.me, pocket.glasses returns similarly to
// head.glasses. This is because modern browsers uses caching and
// remembers where it last access a property. 
// The performance difference should be miniscule. 