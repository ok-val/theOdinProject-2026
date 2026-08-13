let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function listToArray(list, res = []) {
    if (!list.next) {
        return [...res, list.value];
    }
    // instead of a res.push(list.value), create a new array with:
    // const newArr = [...res, list.value];
    // const newArr = res.concat(list.value);
    return listToArray(list.next, [...res, list.value]);
}

const res = listToArray(list).reverse();
res;

//
const fruits = ['apples', 'oranges'];
const veggies = ['lettuce', 'kale'];
const combined = [...fruits, ...veggies];
combined;
