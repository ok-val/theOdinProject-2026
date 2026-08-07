/**
 * Sometimes, instead of waiting for all promises to resolve as in
 * Promise.all(), I would prefer to trigger a promise resolve as soon as
 * any one promise of the array is resolved. 
 * 
 * For this, I use Promise.race(). It triggers as soon as any of the 
 * promises returns anything.
 */

function p1 () {
    return new Promise(resolve => setTimeout(resolve('p1 wins'), 500));
}

function p2 () {
    return new Promise(resolve => setTimeout(resolve('p2 wins'), 1000));
}

function p3 () {
    return new Promise((resolve, reject) => setTimeout(reject(new Error('p3 errs')), 1000));
}

Promise.race([p1(), p2(), p3()])
.then(res => console.log(res)) // p1 wins
.catch(err => console.log(err));

