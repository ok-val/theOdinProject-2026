// What is merge sort?

/**
 * Merge sort is an algorithm that recurses through an array of UNSORTED
 * data until it reaches its smallest sub-set, a single item.
 * This single item pops out from the larger array and the algo recurses.
 *
 * In pseudocode (let arr.length > 1):
 * 1. Sort the first half of the array;
 * 2. Soft the second half of the array;
 * 3. Merge the two sorted halves;
 */

// This merge sort implementation always splits between two lists:
// Thus, it is considered Two-Way merging

function merge(left, right, res = [], j = 0, k = 0, l = 0) {
    while (j < left.length && k < right.length) {
        if (left[j] < right[k]) res[l++] = left[j++];
        else res[l++] = right[k++];
    }
    return res.concat(left[j] ? left.slice(j) : right.slice(k));
}

function mergeSort(arr) {
    for (const el of [arr]) {
        if (el.length === 1) return el;
        if (el.length >= 2) {
            const div =
                el.length % 2 === 0 ? el.length / 2 : (el.length + 1) / 2;
            const left = mergeSort(el.slice(0, div));
            const right = mergeSort(el.slice(div));
            const mergedArr = merge(left, right);
            return mergedArr;
        }
    }
}

const test = [5, 5, 4, 3, 5, 0];
const out = mergeSort(test);
out;
