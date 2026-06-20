// SMARTER GETTER AND SETTER

// In accessor-property.js, I learned how to create accessor properties from existing props
// Here, I learn how to use accessor properties to set new properties and to introduce more
// control for them.

let user = {

    // name is a prop that doesn't exist yet
    get name() {
        // Because I cannot pass a prop with the same name as the accessor property name
        // I create a buffer property. 
        return this._name;
    },

    set name(value) {
        // The buffer property can be passed between accessors
        // Now, it's possible to introduce additional controls such as length:
        if (value.length < 3) {
            console.log('Assigned name must contain at least 3 characters.');
            return; // (this is a useful pattern to exit functions if a condition is met)
        }
        this._name = value;
    },
}

user.name = 'Ori';
// console.log(user._name); // Ori - the buffer prop can also be accessed 
console.log(user.name);
user.name = 'Al';
console.log(user.name); // Ori -- name has not changed