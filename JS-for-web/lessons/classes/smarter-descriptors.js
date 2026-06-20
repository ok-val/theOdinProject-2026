// Using DESCRIPTORS FOR COMPATIBILITY

// ------------------------------------
// I am rectifying a faulty understand that was fully understood up until this point.
let user = {
    firstName: 'Ori',
    surName: 'Orio',
    // (Keep in mind that object literal cannot create their own execution scope for this)
    // fullName: `${this.name} ${this.surname}`, 
    // Let this be thoroughly reminded
}

// console.log(user.firstName); // Ori
// ------------------------------------

// Back to the lesson,...

// Descriptors can also be used for prototype functions 

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // Now, if I want to dynamically access the prop age from birthday
    // Using get and let keywords is illegal
    // get fullName() {
    //     let todayYear = new Date().getFullYear();
    //     return todayYear - this.birthday.getFullYear();
    // }; // Error

    // Thus, DESCRIPTORS come to the rescue:
    Object.defineProperty(this, 'age', {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        },
    });
}

let ori = new User('Ori', new Date(1996, 2, 16));

console.log(ori.birthday);
console.log(ori.age);

