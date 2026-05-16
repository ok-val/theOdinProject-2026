// In the previous part, we understand that there are a few things we can do
// with prototypal inheritance such as getting the [[Prototype]] and defining
// on the [[Prototype]] using .prototype

// In this lesson, we learn how to use .getPrototypeOf() and .setPrototypeOf()
// to get and set the [[Prototype]]
// We are going add a Personal object constructor so that Player object 
// constructor will inherit from

function Person(name) {
    this.name = name;
}

// Assume that we want to add some additional function for the Person object 
// constructor and that we have been instructed not to touch the constructor itself

Person.prototype.sayName = function () {
    console.log(`Hi! My name is ${this.name}`);
};

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.getMarker = function() {
        console.log(`My marker is "${this.marker}"`);
    };
}   


// End of set up

// Now when we inspect the Player's [[Prototype]]
// QUERY: From whom does Player [[Prototype]] inherit from?  
console.log(Object.getPrototypeOf(Player.prototype)); // returns Object.prototype
// This says that the .prototype property of the Player object constructor inherits
// from the .prototype property of the Object object constructor
// This is implemented under-the-hood, when we use the keyword `this`.

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
// And inspect Player.prototype
console.log(Object.getPrototypeOf(Player.prototype));


// Begin object construction

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");

player1.sayName(); // Hello, I'm steve!
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is "X"
player2.getMarker(); // My marker is "O"

// All Player objects have now inherit the function sayName() from Person