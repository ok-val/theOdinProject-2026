// So what is a class? 
// Which object does a class inherit from?

class Cup {
    constructor(size = "big" | "medium" | "small") {
        this.size = size;
    }

    displaySize() {
        console.log(this.size);
    }
}

// console.log(typeof Cup); // function
// console.log(Cup instanceof Function); // true

const bigCup = new Cup("big");
// console.log(bigCup.valueOf());

// Here's what class does:
// 1. Creates a constructor function named Cup
// The function code is taken from the constructor method of the Object class
// 2. Store subsequent class methods in Cup.prototype


// To further introspect the class Cup
console.log(Cup.prototype); // returns the [[Prototype]] object of Cup
console.log(Object.getPrototypeOf(bigCup) === Cup.prototype);
// See that cup inherits the [[Prototype]] prop from Object

// What is the class Cup really?
console.log(Cup === Cup.prototype.constructor);
// The class Cup is function that is the same as its constructor function

// What does Cup contain?
// console.log(Object.getOwnPropertyNames(Cup.prototype)); 

// So CUP is the constructor function of the class Cup
// And Cup.prototype is the [[Prototype]] object of the Cup constructor function