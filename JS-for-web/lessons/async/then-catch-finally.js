// Following up from promise.js,

const promise = new Promise(function(resolve, reject) {
    // state: 'pending', value: undefined
    
    // setTimeout(() => resolve('done'), 1000);
    // state: 'fulfilled', value: 'done'

    setTimeout(() => reject(new Error('Whoopsie!')), 1000);
    // state: 'rejected', value: error
})

// .then() is a method of the Promise object 

promise.then(
    function onfulfilled (result) {
        console.log(result);
    }, 
    function onrejected (error) {
        console.log(error);
    })

// .catch() is another method of the Promise object

promise.catch(
    function onrejected (error) {
        console.log(error);
    }
)

// Notice that .catch(f) is a complete analog of .then(null, f)


/**
 * .finally() is similar to .then(f,f) in that it runs always (since 
 * a promise would only contain to returned states: 'fulfilled' | 
 * 'rejected
 * 
 * The idea of `finally` is to setup a handler to clean up/finalize 
 * data after the pervious operations complete.
 * 
 * The thing with finally() is that it doesn't do anything with either
 * state of the promise. It just do something upon completion. 
 * This is helpful for callback that doesn't direct access the state or
 * value of the promise object.
 * 
 */

promise.finally(
    function onfinally() {
        console.log('do this regardless') ;
    }
)

// Also note that return clause is ignored for finally()

// consider when .finally(), .catch(), and .then() are chained
promise.finally(
    function () {
        console.log('do this');
        return 'this is ignored'; 
    }
).catch(
    function (error) {
        console.log(error);
        return 'this is passed';
    }
).then(
    function (data) {
        console.log(data);
    });

/**
 * finally() doesn't get the outcome of the previous handler. 
 * It just takes no arguments 
 */  

/**
 * The premise with all these Promise is that to:
 * Leave the Promise to do the fetching,
 * .then(), .catch(), and .finally() reacts to the results of the
 * fetch. Don't conflate these functionalities.
 */

