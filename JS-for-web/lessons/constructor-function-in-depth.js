// https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript

// Constructor functions are used to construct new objects. 
// The new operator is used to create new instances (a better keyterm for 
// original objects, jeez). 

// Besides Objects, there are other built-in constructors such as Array and Date.

// If we have a game of multiple characters and all of them have some similarities
// with some unique capabilities, 

// We want to make the shared capabilities accessible to all instances, while 
// keeping the unique ones available only to certain individuals

// We can begin with a constructor function Hero

function Hero (name, level) {
    this.name = name;
    this.level = level;
}

let arcane_hero = new Hero('Ragn', 6);
// we can convert this instance object type to string using the .toString() function

// We can get the [[Prototype]] of arcane_hero, which is the Hero prototype object
console.log(Object.getPrototypeOf(arcane_hero));

// As per common practice, we have only defined properties and not methods
// This is preferred in production code for reaadability

Hero.prototype.greet = function () {
    return `${this.name} says hello.`;
}
// testing it immediately
console.log(arcane_hero.greet());


// Now we want to implement more classes: Warrior and Hero
// In prototypal-inheritance-in-action.js, I used .setPrototypeOf(),
// to set prototypal inheritance among already-defined constructors.
// Here's the way to set inheritence during INITIALIZATION.

function Warrior(name, level, weapon) {
    // Use the call() method (native to all Object) to copy properties from one
    // constructor to another. The method should always take the `this` keyword.
    // Otherwise, this process is manually implemented 
    Hero.call(this, name, level);
    // Handle stragglers
    this.weapon = weapon;
}

function Wizard(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;
}

let druid_wizard = new Wizard('Zyno', 2, 'Quick Healing');
// Inherited and native PROPERTIES are now available to druid_wizard
console.log(druid_wizard.name, druid_wizard.spell);

// But not METHODS
// In order to enable method inheritance, we must set the Prototype
Object.setPrototypeOf(Wizard.prototype, Hero.prototype);
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);

// Now we can use the methods from the [[Prototype]]
console.log(druid_wizard.greet());

