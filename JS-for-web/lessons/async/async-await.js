/**
 * Async code can be hard to follow when it has a lot of things going on
 * 
 * Introducing *async* and *await*:
 * These two keywords that can help make async code read more like sync
 * code. Both async and await continuations run on the Microtask Queue,
 * just like the Promise handlers.
 * 
 * In fact, they are aliases of Promise handlers, designed for better
 * readability.
 *  
 * 
 */

// Consider this async function
import { visualCrossingKey } from '../apis/apikeys.js';    
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ho%20chi%20minh?unitGroup=us&key=${visualCrossingKey}&contentType=json`;

function p1 () {
    fetch(url)
        .then(response => response.json())
        .then(promise => console.log(promise.days[0].tempmax))
        .catch(err => console.error(err));
}

// Now consider how that defers from this function

async function p2 () {
    const response = await fetch(url);
    const promise = await response.json();
    const tempmax = await console.log(promise.days[0].tempmax);
}

// p2().catch(err => console.error(err));

/**
 * Different syntax, await doesn't use callback, runs in the same
 * Microtask Queue.
 */  


// The async keyword
/**
 * This keyword is what lets the V8 engine know that you are declaring
 * an async function (which will be queued as microtask). 
 * 
 * When an async function is declared, it automatically returns a promise.
 * Just an alias or SYNTACTIC SUGAR for returning new Promise.
 */

// Error handling
/**
 * Handling errors in async/await can use .catch() handler.
 * 
 * Otherwise, I could use the more idiomatic catch (err) as part of a
 * async try...catch block 
 * 
 * So refactoring the function above would look like this:
 */

async function p3 () {
    try {
        const response = await fetch(url);
        const promise = await response.json();
        const tempmax = await console.log(promise.days[0].tempmax);
    } catch (err) {
        console.log(err);
    }
}

p3();

