// In factory-function.js, I discussed setbacks of object constructor (fns that construct objs with 
// inheritance properties).

// In place, I can use factory function, which is a pattern for using function to return objects on call
// Using factory function, I can avoid using the new keyword, which is the common pitfall in using constructors.

function createUser(name) {
    const username = '@' + name;

    let reputation = 0;
    const getReputation = function () { return reputation };
    const giveReputation = function () { reputation++; };

    return { name, username, getReputation, giveReputation };
    // This doesn't return reputation, but reputation is passed into returned functions getReputation
    // and giveReputation. Thus, this function uses closure to create a private scope for this var.

    // The common pitfall is returning the private variable
    // return { name, username, reputation, getReputation, giveReputation };
    // In essence, what I'm doing here is just returning a property with a var. 
    // The enclosed variable doesn't track with the original. A separate instance was created!

    // I don't understand the whole story, but here's the essential part:
    // When createUser() is called, a mutable variable is created, enclosed inside two functions,
    // but is not returned. When this var is used to create the functions, JS creates a separate instance
    // of the var AND the original is not updated. If this original var is returned along with others,
    // it stays static because the vars inside the created functions is privately scoped and does not
    // update the function-scoped var (the original). 
    // Therefore, privately scoped variable are only accessible via closure. 
}

// Closure is technically possible for constructors, but it defeats the purpose of inheritance because
// the private vars are not accessible via the prototype chain.


const jinwoo = createUser('jinwoo');
jinwoo.giveReputation();
jinwoo.giveReputation();

console.log(jinwoo);
console.log(jinwoo.getReputation());
