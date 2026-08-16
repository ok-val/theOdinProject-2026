function partition(arr) {
    for (const el of [arr]) {
        // el;
        if (el.length === 1) {
            // el;
            // res = res.concat([el]);
            return el;
        }
        if (el.length >= 2) {
            // el;
            const div =
                el.length % 2 === 0 ? el.length / 2 : (el.length + 1) / 2;
            // div;
            const halves = [el.slice(0, div)].concat([el.slice(div)]);
            // halves;
            // console.log(halves[0]);
            // console.log(halves[1]);
            const left = partition(el.slice(0, div));
            const right = partition(el.slice(div));
            const mergedArr = merge(left, right);

            // left;
            // right;
            // mergedArr;
            return mergedArr;
        }
    }
    // list of lists
}

function merge(left, right) {
    let [j, k, l] = [0, 0, 0];
    let mergedArr = [];
    for (let i = 0; j < left.length && k < right.length; i++) {
        // console.log(left[j]);
        // console.log(right[k]);
        if (left[j] < right[k]) {
            mergedArr[l++] = left[j++];
        } else {
            mergedArr[l++] = right[k++];
        }
    }
    // if (left[j]) {
    //     // console.log(left[j]);
    //     mergedArr = mergedArr.concat(left.slice(j));
    // } else if (right[k]) {
    //     // console.log(right[k]);
    //     mergedArr = mergedArr.concat(right.slice(k));
    // }

    mergedArr = mergedArr.concat(left[j] ? left.slice(j) : right.slice(k));

    // mergedArr;
    // j;
    // k;
    // l;
    return mergedArr;
}

const test1 = [5, 5, 4, 3, 5, 0];
const out = partition(test1);
out;

// console.log(out.length);
// console.log(out[0]);
// console.log(out[1]);

console.log([1] > [2]);
