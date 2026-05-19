// The for..in loop is commonly used to iterate over objects'
// properties.

let animal = {
    eats: true,
    sleep: false,
};

let elk = {
    __proto__: animal,
    gallops: true,
};

// Object.keys returns own keys only
console.log(Object.keys(animal)); // returns a list of keys


// for..in loops over both keys and values
for (let prop in elk) {
    console.log(`${prop}: ${elk[prop]}`);
} // logs each key: value

// But wait, if elk is an instinct of animal
Object.getPrototypeOf(elk) === animal; // true
// and animal is an instinct of Object
Object.getPrototypeOf(animal) === Object.prototype; // true

// Then certain properties or methods should be enumerated
// But the for..in loop above onl returns a list of 2 items
// How is this the case?
// Simple: Other properties of Object.prototype have the flag
// enumerable: false. Ergo, they will not be enumerated by loops


// Additionally, 
// We can also pair [object].hasOwnProperty([prop]) with the
// for..in loop to access only the props that are native to 
// the object in question

for (let prop in elk) {
    // for code to be more readable, conditions take own line
    let isOwn = elk.hasOwnProperty(prop);

    if (isOwn) {
        console.log(`${prop}: ${elk[prop]}`);
    } // returns only native properties
}
