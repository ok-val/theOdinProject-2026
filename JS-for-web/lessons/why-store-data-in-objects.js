// As a refresher, here's how to define an object with multiple properties
const myObject = {
    property: "Value!",
    property2: 88,
    "sacrilegious property": function () {
        // do stuff!
    },
};

// And here's how to access object's data:
// dot notation
console.log(myObject.property);

// bracket notation --- this gives a computed value
console.log(myObject["sacrilegious property"]);

// Compare the following two options for structuring data with objects
// First is without objects
const playerOneName = "tim";
const playerTwoName = "jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// Second is using objects
const playerOne = {
    name: "tim",
    marker: "X",
};

const playerTwo = {
    name: "jenn",
    marker: "O",
};

// Notice that the second method is just easier to read. Because of the hierarchy.

// In accessing their values, we get to use the dot or bracket (as visual delimiters as well!)
console.log(playerOneName);
console.log(playerOne.name);

// This advantage scales! That is why object is preferred when handling larger data structures in JS.
