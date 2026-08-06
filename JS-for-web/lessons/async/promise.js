// Here's the class constructor syntax for a Promise object:

let promise1 = new Promise(function(resolve, reject) {
    /**
     * Promises accepts a callback function called Executor that 
     * accepts two callbacks: resolve and reject
     * 
     * When the executor returns something, one of those will be called:
     * * resolve(value): if the job is finished successfully, result = value
     * * reject(error): if an error occurs, error = error object
     */  

    /**
     * The promise object returned by the new Promise constructor has
     * these internal properties:
     * * state: "pending" => "fulfilled" (when resolve(value)) | "rejected" (when reject(error))
     * * result: "undefined" => value (when resolve(value)) | error (when reject(error))
     * Both state and result are private properties
     */

    // Let's emulate some wait time
    setTimeout(() => resolve("done"), 1000);
    
    // Or immediate return "done"
    resolve("done");
    
    // Either way, we can expect that: state = 'fulfilled', result = "done"
    // Whenever a resolve() or reject() is called, the executor return and ignore the rest of the code
});

console.log(Object.getPrototypeOf(promise1));
promise1.then(console.log(promise1.state)); // state is a Private property :(


let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Whoops Error!')));
    // We can now expect state = "rejected"; result = error Object
})




