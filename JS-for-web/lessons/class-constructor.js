// Instantiating objects using constructors

// Object constructors
// Manually typing out contents of objects that have pretty much the same type every time get tedious
// Which is why we need a cookie cutter or, more officially, a CLASS CONSTRUCTOR.

// This the pattern for JS class constructor using a constructor function
function Patient(name, age, gender) {
    // name = name;
    // age = age;
    // gender = gender;
    // Without `this` keyword, the constructor won't work
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.selfIntro = function () {
        console.log(`I'm ${this.name}, ${this.age} years old.`);
    };
}

const tom = new Patient('Tom', 23, 'M');


// In order to safeguard constructors from being used as a regular function 
// e.g. const tom = Patient('Tom', 23, 'M') which we know will return an empty object
// We can use a new.target conditional to safeguard ourselves from doing so.

function Player(name, marker) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call this class constructor");
    }
    this.name = name;
    this.marker = marker;
}

// See the custom error raised if we don't use the new constructor
const wang = Player('Wang', 'X');