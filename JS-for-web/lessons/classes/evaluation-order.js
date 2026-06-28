// Evaluation order

// When a class definition (expression or declaration) is evaluated, 
// here's what happens in order

// 1. If present, the clause `EXTENDS` is first evaluated.
// It must evaluate to a valid constructor function 
// (e.g., has `super` been used before calling `this`).


// 2. The CONSTRUCTOR method is extracted, 
// substituted with a default implemetation if not present.
// This step is not observable.


// 3. PROPERTIES'S KEYS are evaluated in the order of declaration.
// None of the property values are evaluated yet.


// 4. METHODS AND ACCESSORS (getters/setters) are installed in the order of declaration.
// Instance methods and accessors are installed on the Prototype property of the class.
// Static methods and accessors are installed on the class itself (not attached to Prototype).
// Private methods and accessors are saved to be installed on the instance directly later. 


// 5. The class is now INITIALIED with the prototype specified by `extends`.
// and implementation specified by `constructor`.


// 6. PROPERTIES'S VALUES are not evaluated in the order of declaration.
// For instance FIELDS (public or private), its initializer expression is saved.
// During instance creation, the initializer would run at the start of the constructor,
// right before the super() call returns. The property is created on the Prototype.

// For each static FIELDS (public or private), its initializer is evaluated with `this`
// set to the class itself, and the property is thus created on the class.

// FOr static initialization blocks, they are evaluated with this as well. 


// 7. The class is now ready to be used as a class constructor function.