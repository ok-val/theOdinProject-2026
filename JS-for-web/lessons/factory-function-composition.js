// Whereas object constructors benefit from prototypical behaviors, 
// Factory functions can mimic this behavior using COMPOSITION.

// While its possible to give factory function some prototypical features,
// it's counterintuitive because closure hides private vars from instances.

// Consider this situation (from factory-functions-private-variables.js),

function createUser(name) {
    const username = '@' + name;

    let reputation = 0;
    const getReputation = function () { return reputation };
    const giveReputation = function () { reputation++; };

    return { name, username, getReputation, giveReputation };
}

// We want to create a Player based on User (so that Player inherits some properties from User)

function createPlayer(name, level) {
    // Using destructuring here (see destructuring.js)
    // Remember that in using destructuring assigner and assignee vars must be the same
    const { getReputation, giveReputation } = createUser(name);
    // Copies ONLY the two inner functions of createUser(name) with their private vars

    // Alternatively, copy ALL properties of User to return
    const user = createUser(name);

    // Create two functions for Player objects
    const getLevel = () => level;
    const increaseLevel = () => { level++; };

    // return {
    //     name, getReputation, giveReputation,
    //     getLevel, increaseLevel,
    // }

    return Object.assign({}, user, { getLevel, increaseLevel });
}

const playerOne = createPlayer('anderson', 13);
playerOne.giveReputation();
playerOne.giveReputation();
playerOne.giveReputation();

console.log(`PlayerOne's reputation is ${playerOne.getReputation()}`);

playerOne.increaseLevel();
playerOne.increaseLevel();

console.log(`PlayerOne's currently at level ${playerOne.getLevel()}`);
// That's it! We now have a factory function for Players that inherits selected properties from Users.

// Using Object.assign() to return the entire User object above, we could access every property of User
console.log(`PlayerOne's username is ${playerOne.username}`);
