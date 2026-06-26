// # Public properties
// Normally, here's a how a property (method/field) is defined:

class secretAgent {
    static organization = 'IMF';
    nameSuffix = 'Agent';
    constructor(codeName) {
        this.codeName = `${this.nameSuffix} ${codeName}`;
    }
}

console.log(secretAgent.organization); // IMF
console.log(secretAgent.nameSuffix); // undefined: this prop is for public for instance only
// Only static properties are accessible by the class

let agentP = new secretAgent('Perry the Platypus');
console.log(agentP.nameSuffix); // Agent
console.log(agentP.codeName); // Agent Perry the Platypus

// These properties are accessible outside of the class definition
// They are thus considered public. Public props can be static or instance. 
// Public static props can only be accessible via the class
// Public instance props can only be accessed via its instances.


class Wizard {
    static #innerThought = 'What a wonderful world...';
    
    // To construct private properties, I must declare an ENCLOSING prop
    // Without these enclosing prop, I will get Syntax Error
    // This means that the private property must already exist within the class 
    // for it to be instantiated. 
    #level;
    #attribute;
    constructor(level, attribute = 'fire' | 'water' | 'wind') {
        this.#level = level;
        this.#attribute = attribute;
    }

    // Private fields can be used with in the class... [1]
    introduceSelf() {
        // return private fields
        return `I'm a Wizard, lvl.${this.#level}, ${this.#attribute} attribute.`;
    }

    // Likewise, private methods can be used inside the class... [2]
    #afflictedLevel(value) {
        this.#level -= value;
    }

    getCursed(curseLvl) {
        this.#afflictedLevel(curseLvl); //
        return `I've been hit with a lvl.${curseLvl} curse... My level is down to ${this.#level} :(`;
    }

    // Lastly, static methods can use static private fields... [3]
    static hallucinate() {
        return this.#innerThought;
    }
}

let wizardM = new Wizard(5, 'fire'); 

// [1]... but not outside the class
console.log(wizardM.level); // undefined 
console.log(wizardM.introduceSelf()); // I'm a Wizard, lvl. 5, fire attribute 

// [2]... but not to be called outside the class
// console.log(wizardM.afflictedLevel(3)); // TypeError
console.log(wizardM.getCursed(3)); // undefined

// [3]... so that the static private field can only be used inside the class
// and doesn't get passed down to instances
console.log(Wizard.innerThought); // undefined
console.log(Wizard.hallucinate()); // What a wonderful world...

