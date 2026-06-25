// ### Methods & Fields

// Methods and fields are actually defined on the prototype of each class. 
// So that all class instances share using them.

class Rectangle {
    // height = 0;
    // width = 0;

    // Constructor
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Fields
    lineWeight = "2px";
    
    // Accessor props
    set height(value) {
        // Remember to use a buffering var
        this._height = value;
    }

    set width(value) {
        this._width = value;
    }

    get height() {return this._height};
    get width() {return this._width};

    get area() {
        return this.height * this.width;
    }
}

const square = new Rectangle(3,3);

// console.log(square.lineWeight); // 2px
// console.log(square.area); // 9



// ### Static methods and fields

// The static keyword defines a static property (method/field) for a class
// Static properties (fields/methods) are only DEFINED ON THE CLASS ITSELF.
// In other words, static properties don't get passed down to instances.

class secretAgent {
    // instance fields and methods
    company = "Family Mart";
    displayCompany = () => this.company;

    // static fields and methods
    static secretCodeName = "CRSO-1";
    static displaySecretCodeName = () => this.secretCodeName;
}

// Our agent will answer what she's given as instance properties 
let agentA = new secretAgent();
console.log(agentA.displayCompany()); // Family Mart

// But not the static ones as static props are only accessible by the class itself
console.log(secretAgent.displaySecretCodeName()); // CRSO-1
console.log(agentA.displaySecretCodeName()); // TypeError


