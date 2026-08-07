let p = Promise.reject('rejected');
// let p = Promise.resolve('fulfilled');

function log(val) {
    console.log(val);
}

// Note that these are aliases. However, using catch is easier to read
p.then(log, log);
p.then(log).catch(log);