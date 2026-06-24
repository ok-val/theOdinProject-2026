// CLASS FIELDS

// Properties in Classes are called Fields

class User {
    
    constructor(name) {
        this.name = name;
    }
    
    // This is a field
    // When defining a field, I don't need to use the keyword this
    specie = 'Hooman';

    introduce() {
        return `Hi! I'm ${this.name}, the ${this.specie}.`;
    }
}

let user1 = new User('Ori');
console.log(user1.introduce());

// The important difference of class fields is that they are not set on the [[Prototype]]

console.log(user1.name); // Ori
console.log(User.prototype.hasOwnProperty('name')); // true 
console.log(User.hasOwnProperty('name')); // false
console.log(User.prototype.name); // undefined
