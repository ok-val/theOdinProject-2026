function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve('done'), ms);
        // this is PROMISIFYING a callback
    })
}

// delay(1000).then((result) => {
//     console.log(`${result} after 3 secs`);
// });


// When to use new Promise vs .resolve()
function getUserDeets(username) {
    return new Promise(resolve => resolve(username));
    /**
     * new Promise = promisfy a callback, so if I have to use callbacks
     * I should do new Promise. 
     */
    return Promise.resolve(username);
    /**
     * Promise.resolve(value) = when I already have a value but the 
     * surrounding code expects a Promise. 
     * A utility tool for casting flattening data (consistency)
     */
    return Promise.reject(new Error('Whoops!'));
}

let userNameA = getUserDeets('Imbo');
userNameA.then(res => console.log(res));

