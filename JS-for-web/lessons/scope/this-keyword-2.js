// `THIS` keyword part 3

// Another way of using `this` is for 
// Indirect Calls

// To review an important fact about functions:
// Functions are objects which are inherits from the 
// function [[Prototype]];

// In this.keyword.js, I learned that functions inheritly have 
// the .bind() method which is used to set a target's `this` 
// context

// In this lesson, I cover two additional methods of the function
// type: call() and apply()

function sayHi (prefix) {
    console.log(prefix + ', ' + this.name);
}

function salute(prefix, salute) {
    console.log(`${prefix}.${this.name}, ${salute}`);
}

let joe = {
    name: 'Joe',
}

let chau = {
    name: 'Chau',
}

// .call() is for using single arg functions
sayHi.call(joe, "Hi");
sayHi.call(chau, "Hello");
// .call() doesn't work on multiple args functions
salute.call(chau, "Hello"); 

// apply() is for multiple kwargs
salute.apply(chau, ["Mr", "thank you."]);

// READ MORE: https://www.javascripttutorial.net/javascript-this/

