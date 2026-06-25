// # CLASSES : MDN

// Classes are special functions (constructor), that, like functions,
// can be defined in the two ways: Class declaration and expression.


// ## Class body
// The body of a class is the part that is in { curly braces }.
// Within the class body are class elements.

// A class element can be characterized by three aspects:
// 1. Kind: Getter, setter, method, or field
// 2. Location: Static or instance
// 3. Visibility: Public or private

// Together, there are 16 possible combinations.
// _ _ _ = 4c1 x 2c1 x 2x1 = 16

// ### Constructor
// Constructor is a special method for creating and initializing an object
// created with a class. 
// The special thing about constructor is that is can use the keyword super
// to call a property or function of a super class.

class Tool {
    constructor() {
        this.material = 'steel';
        this.type = 'handheld';
    }
}

class Wrench extends Tool {
    constructor(material, type) {
        // The constructor of an extended class could use a super function call
        // to pass certain properties from the super class
        super(material, type);
        // These inherited properties can then be changed if needed
        // this.type ='viceheld';
        // this.material ='aluminum';
    }

    showProperties() {
        return `${this.material} + ${this.type}`;
    }
}

let smallWrench = new Wrench();
console.log(smallWrench.showProperties());


// ### Static Initialization Blocks

let toClassOrNotToClass = false;

const ClassWithStaticConditions = class {
    // Static initialization blocks are always executed regardless 
    // of the method for defining the class (declaration or expression).
    static {
        if (!toClassOrNotToClass) {
            // SIB can alter globally scoped vars
            toClassOrNotToClass = true;
        }
        // However, it provides a private scope for all vars.
        // Meaning that vars created in SIBs are never hoisted.
        var privateHere = 'private';
    }
}

console.log(toClassOrNotToClass);
// console.log(privateHere); // ReferenceError

