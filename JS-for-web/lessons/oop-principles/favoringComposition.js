
/**
 * This is another composition patterns, another one was covered in 
 * factory-function-composition.js. This one definitely as more of that
 * functional programming flavor.
 */

// Turn on Quokka

/**
 * Here, the functionalities are defined seperately, decoupled from any
 * classes definition. 
 */
const barker = (state) => ({
    bark: () => console.log(`Woof, I am ${state.name}`)
})

/**
 * Notice that this syntax is just a shortened version of what I learned
 * prior in factory-function-composition.js
 */
// const barker = function (state) {
//     const bark = () => console.log(`Woof, I am ${state.name}`);
//     return { bark };
// }

const driver = (state) => ({
    drive: () => state.position = state.position + state.speed
})

const testState = { name: "Jack" };
console.log(barker(testState));

/**
 * Using this, our new object only needs to have a state so as to return
 * the object containing the function.
 * Said object is going to accrue using Object.assign()
 */

const makeRobotDog = (name) => {
    let state = {
        name: name,
        speed: 100,
        position: 0
    }

    // Accrue the functions using Object.assign()
    return Object.assign(
        {},
        driver(state),
        barker(state)
    )
}

const JackTheRobotDog = makeRobotDog('Jack');
JackTheRobotDog.bark();

/**
 * Unfortunately, inheritance just uses too much coupling, creating a
 * long chain of dependencies that should just be decoupled.
 * 
 * Note that a long chain of inheritence may actually violate some of 
 * OOP principles: Liskov, Dependency, Open-Closed, and Interface Seg
 * once the OOP chain grows.
 * 
 * In this example, we used an FP paradigmatic composition pattern to
 * resolve a lot of issue OOP might introduce down the line.
 * 
 */ 
