/**
 * https://javascript.info/async-await
 * The class Thenable allows us to create a class that returns a 
 * callable `then` method. 
 * 
 * A thenable is any object or function that has a .then() method.
 * If programming object uses promise-like language, JS treats it like
 * a promise---even if it was not created with the native Promise 
 * constructor. 
 * 
 * The core reason for having a thenable object is Interoperability.
 * For before native promises existed, libraries like Bluebird, Q, or
 * jQuery had their own custom async system. A thenable object helps 
 * these libraries to work with the new Promises.
 */

// a thenable class

class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        setTimeout(() => resolve(this.num * 2), 1000);
    }
}

// a thenable object

const thenable = {
    then(resolve, reject) {
        setTimeout(() => resolve(4), 1000);
    }
}

async function f() {
    let res = await new Thenable(1);
    // wait 2 secs then resolve
    console.log(res);
    console.log(await thenable);
}

console.log(1);

f();