/**
 * There are times when I would want to trigger multiple async multiple
 * asyncs but only react with all of them a completed. 
 * 
 * Introducing Promise.all()! It takes an ARRAY of promises and fires 
 * one callback once they are all resolved.
 */

function p1 () {
    return new Promise(resolve => setTimeout(resolve('p1 done'), 500));
}

function p2 () {
    return new Promise(resolve => setTimeout(resolve('p2 done'), 1000));
}

Promise.all([p1(), p2()]).then(res => console.log(res)) // array of res
    .catch(() => console.log('one or more caught errors'));

// If any promise is rejected, .all() returns only the errors

function p3 () {
    return Promise.reject(new Error('Whoops'));
}

Promise.all([p1(), p3()])
.then(res => console.log(res)) // this line is NOT fired
.catch(err => console.log(err)); // this line is fired
