
// Using promises handlers
function doubleAfter2Sec(num) {
    return new Promise((resolve) => {
        setTimeout(resolve(num * 2), 2000);
    }) 
}

// doubleAfter2Sec(2).then((res) => console.log(res));



// Using async/await + thenable

class Thenable {
    constructor(res) {
        this.res = res;
    }
    then() {
        console.log(this.res);
    }
}


async function doubleAfter1Sec(num) {
    // await new Thenable(res);
    const res = await new Promise(resolve => setTimeout(() => {
        resolve(num * 2);
    }, 500));

    await console.log(res);
    await new Thenable(res);
}

doubleAfter1Sec(3);