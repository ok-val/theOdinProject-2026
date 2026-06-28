// In getter-setter-for-object-inheritance.js, we start to 
// learn that we can use certain functions to set different
// properties (or states) of objects

// This is useful because we can have prototypal objects with
// these state-altering functions built-in

let animal = {
    walk() {
        if (!this.isSleeping) {
            return `Let's walk!`;
        } else {
            return `ZzZ`;
        }
    },
    sleep() {
        this.isSleeping = true;
    },
};

let rabbit = {
    __proto__: animal,
    name: `White Rabbit`,
};

// When sleep() is called, rabbit.isSleeping is created and set
// to true
rabbit.sleep();

// Notice that only rabbit is now sleeping
console.log(rabbit.walk());
// But the prototypal object is not sleeping
console.log(animal.walk());