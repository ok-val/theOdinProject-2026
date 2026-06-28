// PART 3 -- Where does it write?

let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.eat();
console.log(rabbit.full); // true;
console.log(animal.full); // undefined;

// This keyword refers to only the instance and not the prototype
// Therefore, animal.full is not yet defined.


// PART 4 -- Why are both hamsters full?

let hamster = {
    stomach: [],
    
    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    stomach: [], // *
    __proto__: hamster
};

let lazy = {
    stomach: [], // *
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// // This one also has it, why? fix please.
lazy.eat("banana");
console.log(lazy.stomach); // apple, banana

// * Solution:
// When the .eat() method is called, js looks for that method 
// in the prototype (=hamster), but a local instance of the 
// property is not defined so the method pushes new data into
// the prototype's stomach instead. Thus, pre-loading this prop.

// When lazy.eat() is called, it inherits from the pre-loaded prop
// The result is that we accidentally initialized this prop with
// pre-emptive data.

// Remember:
// If this is not desirable, it's best to initialize instance's
// prop individually before using a method to access or modify it.
