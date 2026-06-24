// Just like functions, classes can be defined inside another expression

let User = class {
    sayHi() {
        console.log('Hello');
    }
}

new User().sayHi(); // Hello


// Accessor properties can also be used

let Friend = class {
    constructor(name) {
        // invoke setter
        this.name = name;
    }

    get name() {
        // _name buffers between get and set
        return this._name;
    }

    set name(value) {
        this._name = value; 
    }
}

let moe = new Friend('Moe');
console.log(moe.name); // Moe (_name)
moe.name = "Moer";
console.log(moe.name); // Moer (_name)



// Similar to function factories, classes can also use private scopes
function makeClass(initial) {
    let x = initial;
    return class {
        addX() {
            x++;
        }

        substract() {
            x--;
        }

        showX() {
            return x;
        }
    }
}

let makeCounterFrom3 = makeClass(3);
let counter1 = new makeCounterFrom3();

counter1.addX(); 
console.log(counter1.showX()); // 4
