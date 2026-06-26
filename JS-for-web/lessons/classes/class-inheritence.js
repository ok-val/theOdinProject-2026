// Here comes the juicy part:
// # INHERITANCE

// To enable class inheritance, I have to choose a parent class

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} made a sound`;
    }
}

class Cat extends Animal {

    // The first rule is that if there's a constructor within the subclass,
    // it must first call super() in order to use this later, [1]
    constructor(name) {
        super(name);
    }

    specie = 'cat';

    speak() {
        // [1]... meaning that using this here wouldn't be possible,
        // without calling super() in the constructor
        return `${this.name} meowed`;
    }
}

const catD = new Cat('Dora');
const animalE = new Animal('Ella');

console.log(`I met two animals, ${catD.name} and ${animalE.name}.`)
console.log(`I know ${catD.name} was a ${catD.specie}, but ${animalE.name} was unknown.`);
console.log(`I heard ${catD.speak()}, but when ${animalE.speak()}, I couldn't recognize it...`);



// The second rule is that when a subclass shares the same class method
// with the same name of that of the super class,
// the method definition in the subclass is treated as a new definition,
// meaning that it overwrites the super class definition entirely.

// In this case, if I wish to combine both super- and sub-class behaviors,
// I need to use super as a function call... [2]
class Pushup {
    move() {
        return `Push up and down.`;
    }
}

class Burpee extends Pushup {
    move() {
        // [2]... like this:
        return `${super.move()} Jump up.`;
    }
}

const exercise1 = new Pushup();
const exercise2 = new Burpee();

// Now, I have both behaviors combined. :)
console.log(exercise1.move());
console.log(exercise2.move());