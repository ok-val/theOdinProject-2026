function makePromiseAfterOneSec() {
    setTimeout(() => null, 1000);
    return new Promise((resolve) => resolve('done'));
}

const promise1 = makePromiseAfterOneSec();
promise1.then(res => console.log(res));

