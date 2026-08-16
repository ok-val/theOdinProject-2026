function merge(left, right, res = [], j = 0, k = 0, l = 0) {
    if (j < left.length && k < right.length) {
        return left[j] < right[k]
            ? merge(left, right, res.concat(left[j]), j + 1, k, l + 1)
            : merge(left, right, res.concat(right[k]), j, k + 1, l + 1);
    }
    return res.concat(left[j] ? left.slice(j) : right.slice(k));
}

function mergeSort(arr) {
    if (arr.length === 1) return arr;
    const div = arr.length % 2 === 0 ? arr.length / 2 : (arr.length + 1) / 2;
    const left = mergeSort(arr.slice(0, div));
    const right = mergeSort(arr.slice(div));
    return merge(left, right);
}

const test = [1, 2, 4, 6, 0];
const out = mergeSort(test);
out;
