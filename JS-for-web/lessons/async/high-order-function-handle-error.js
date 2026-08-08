const errMsg = 'YOLO error!';

async function yolo() {
    return Promise.reject(errMsg);
}

// yolo().catch(err => console.error(err));

// If we want to wrap this error handlers... we can use a High Order function
/**
 * A higher order function is a function factory that returns a function
 * that clones the behavior of the original function 
 */


function handleError(fn) {
    // handleError(fn) takes fn and returns a function that takes ...params
    return function (...params) { // rest parameter 
        return fn(...params).catch((err) => console.error(err));
    }
}

// const handleError = (fn) => (...params) => fn(...params).catch(err => console.error(err));

const safeYolo = handleError(yolo);
// handleError(fn) takes fn and returns a function that takes ...params
safeYolo;  // function (...params)
// only when it's called, it's going to run yolo() inside that function 
safeYolo();

// With this technique, I can create batch functions for .then() and .catch()




// A little function constructor review

// #1
// function addNum(num) {
//     return function (...params) { 
//         return params.reduce((acc, cur) => acc + cur, num); 
//     }
// }

// const addFive = addNum(5);
// console.log(addFive(3));


// #2
// function increment(n) {
//     let res = 0;
//     return () => res += n; 
// }

// const incrementFive = increment(5);
// console.log(incrementFive());
// console.log(incrementFive());