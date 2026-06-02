// `THIS` keyword part 2

// The third way of using the `this` keyword is for 
// Constructor Calls

// Constructor call is the way I have been using `this` for
// prototypal inheritance

// This operation is combined with the keyword `new` to 
// create a new instance using a constructor function.

function Cake (flavor, type) {
    this.flavor = flavor;
    this.type = type;
}

// I would link prototypes here

// Let's give my cake constructor some functions
Cake.prototype.getFlavor = function() {
    return this.flavor;
}

Cake.prototype.getType = function() {
    return this.type;
}

let cake1 = new Cake('Caramel','Flan');
console.log(cake1.getFlavor());
console.log(cake1.getType());

// READ MORE: https://www.javascripttutorial.net/javascript-this/
