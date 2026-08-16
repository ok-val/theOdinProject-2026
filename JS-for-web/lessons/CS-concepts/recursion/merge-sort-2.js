function partition(arr) {
    let res = [];
    for (const el of [arr]) {
        if (el.length === 1) {
            el;
            // res = res.concat([el]);
            return el;
        }
        if (el.length >= 2) {
            const div =
                el.length % 2 === 0 ? el.length / 2 : (el.length + 1) / 2;
            // div;
            const halves = [el.slice(0, div)].concat([el.slice(div)]);
            halves;
            // console.log(halves[0]);
            // console.log(halves[1]);
            const left = partition(halves[0]);
            const right = partition(halves[1]);
            left;
            right;
            // for (const e of halves) {
            //     res = res.concat([partition(e)]);
            //     e;
            // }
        }
    }
    // res;
    // list of lists
    // return res;
}

function merge(left, right) {
    let [m, n] = [0, 0];
}
merge();

const test1 = [1, 2, 3];
const out = partition(test1);
out;

console.log(out.length);
// console.log(out[0]);
// console.log(out[1]);

// const test2 = [[[1], [2]], [[3]]];
// const redc = arr =>
//     arr.reduce((acc, val) => {
//         val;
//         return Array.isArray(val) ? acc.concat(redc(val)) : acc.concat(val);
//     }, []);
// const out1 = redc(test2);
// out1;

const test2 = [[1, 2], 3];
console.log(test2.length);
