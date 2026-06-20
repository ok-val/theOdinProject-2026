// ACCESSOR DESCRIPTORS

let user = {
    name: 'Ori',
    surname: 'Orio',
    // (Keep in mind that object literal cannot create their own execution scope for this)
    // fullName: `${this.name} ${this.surname}`, 
};

// If I don't want to touch the user object above,
// I could consider an accessor descriptor.
Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },
    set(value) {
        [this.name, this.surname] = value.split(" ");
    },
});

console.log(user.fullName); // Ori Orio

user.fullName = 'Val Valory';
console.log(user.fullName); // Val Valory

// PRO: Allows creating additional accessor properties
// but without modifying the original object. 
