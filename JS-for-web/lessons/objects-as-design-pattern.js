// In why-store-data-in-object.js, we learn that object is the way go when organizing data. 
// It's also useful for organizing FUNCTIONALITY as well.

// This is the core tenet of Object Oriented Programming (OOP), in which objects store values, run code, and can interact with one another.

// Methods: functions that is stored in an object as a property.

// In OOP, nearly everything can be expressed as an object. 
// The questions are: What do they store and how can it be accessed?


// To store functions in objects, we can store them directly in properties, OR,
// We can use object literal
// Either way, calling these functions would use the same syntax

const car = {
    maker: "Volkswagen",
    model: "Golf",
    year: 2026,
    color: "blue",

    // Store functions in properties
    printSelfInfo: function () {
        // Use backticks notation
        console.log(`This ${this.maker}'s ${this.model} is ${this.color} and was made in ${this.year}.`);
    },

    openDoor: function () {
        // Use double-quote notation
        console.log("Door is opened");
    },

    // Use object literal
    closeDoor() {
        console.log("Door is closed");
    },
};

// car.printSelfInfo();
// car.closeDoor();

// Note: The `this` keyword behaves differently inside arrow functions vs traditional function expressions

// ------

// With all of this knowledge, here's how we would create a rock paper scissor game following OOP framework

const rps = {
    humanScore: 0,
    computerScore: 0,

    playRound(playerChoice) {
        // code to play the round, update score if needed, inform player of round's winner
    },

    getWinner() {
        // return the player with the highest score ("computer" | "human" | "tie")
    },

    reset() {
        // reset both players' score to 0
    },
};

// Playing the game using this object would look something like this.

// First turn, I choose rock
rps.playRound("rock"); // returns "player" because we got lucky 
// and check for the score
rps.getWinner(); // returns "player" since computerScore: 0, humanScore: 1;

// Since I'm a chicken, Imma stop when at the top.
// Let's reset the game for the next person
rps.reset();

