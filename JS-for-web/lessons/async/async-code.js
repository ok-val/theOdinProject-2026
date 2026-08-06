/**
 * Why do we need async code? 
 * 
 * Since we deal with the web, there are some functions that takes some
 * time to complete and this would cause delay if they were to be 
 * implemented normally (i.e., without async). 
 * 
 * So Async code allows codes to run the background while other codes 
 * execute.
 */

/**
 * So we already know what callback is.
 * 
 * Callback is a function passed into another function as an arg
 * which is then invoked inside the outer function.
 * 
 * However, callbacks are helpful until the codes grows and gets more
 * complex, like callback chaining, ordering, etc.
 * 
 * Situations like this are callback hell.
 */

/**
 * One way of doing async code is with PROMISES
 * 
 * A PROMISE is an object that might produce a value at some point in
 * the future.
 */


// Here's a counter example:

const getData = function () {
    // go do something, like fetching some data from API
    // clean it up and return it as an object.
    return data ;
} // this function might take some time

const data = getData();
const extractedData = data[0];

/**
 * Since getData() depends on some external API calls, data is not going
 * to be returned immediately. So when this runs, we're going to get 
 * undefined initially. 
 */

/**
 * So the trick is that we don't want to return extractedData 
 * immediately, but instead to call it only AFTER the getData() actually
 * returns with something useful. 
 */

const data = getData();
// When data delivers, THEN run a callback to do something with data
data.then( function (data) {
    const extractedData = data[0];
})



