const test3 = [1, 2, 3];
const test4 = [1, 2, 4];

const out = perumtationForThree(test4);
out;

function perumtationForThree(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        const a = combinePer(arr, i);
        res = res.concat(a);
        res;
    }
    return res;
}

function combinePer(arr, i) {
    let newRes;
    const { res, resVal } = splitByIndex(arr, i);
    res;
    resVal;
    newRes = res.map(arr => arr.concat(resVal));
    newRes;
    return newRes;
}

function splitByIndex(arr, i) {
    const resArr = arr.filter((_, index) => index !== i);
    const resVal = arr.filter((_, index) => index === i);
    resVal;
    const res = permutationForTwo(resArr);
    res;
    return { res, resVal };
}

function permutationForTwo(arr) {
    const res = [[...arr]];
    res.push(arr.reverse());
    res;
    return res;
}

// const test0 = [];
// const test1 = [1];
// const test2 = [1, 2];

// const res = permutations(test3);