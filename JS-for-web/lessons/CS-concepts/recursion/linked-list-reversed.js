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

// const res1 = listToArray(list).reverse();
// res1;

// The recursive fn structure I was looking for :)
function reverseLinkedList(list, i = 0) {
    const reversedValues = listToArray(list).reverse();

    if (i < reversedValues.length - 1) {
        return {
            value: reversedValues[i],
            next: reverseLinkedList(list, i + 1)
        };
    }
    return {
        value: reversedValues[i],
        next: null
    };
}

const res = reverseLinkedList(list);
console.log(res);
