/**
 * In this exercise, I'm refactoring the async/await function to use
 * a higher-order function
 */

function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function addAsync(x) {
    return Promise.all([
        doubleAfter2Seconds(10),
        doubleAfter2Seconds(20),
        doubleAfter2Seconds(30)
    ]).then((res) => {
        return res.reduce((acc, cur) => acc += cur, x);
    })
}

addAsync(50).then((res) => {console.log(res)});


// Couldn't come up with a better fn name...
function addAsyncMod(fn) {
    return async function(x, ...params) {
        return Promise.all(params.map((elem) => fn(elem)))
        .then((res) => {
            return res.reduce((acc, cur) => acc += cur, x);
        }); 
    }
}

// Here's the single line... looks horrible...
// const addAsyncMod = (fn) => async (x, ...params) => Promise.all(params.map((el) => fn(el))).then(res => res.reduce((acc, cur) => acc += cur, x));

const moddedFn = addAsyncMod(doubleAfter2Seconds);
moddedFn(50, 10, 20, 30).then((res) => {console.log(res)});



