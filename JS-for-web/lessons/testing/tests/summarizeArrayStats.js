const summarizeArrayStats = array => {
    if (!Array.isArray(array)) {
        throw new Error('non-arrays not accepted');
    } else if (array.find(e => !Number.isInteger(e))) {
        throw new Error('array members must all be Integers');
    }

    const average = array.reduce((acc, cur) => (acc += cur), 0) / array.length;
    const min = array.reduce((prev, cur) => (prev < cur ? prev : cur));
    const max = array.reduce((prev, cur) => (prev > cur ? prev : cur));

    return Object.assign(
        {},
        { average },
        { min },
        { max },
        { length: array.length }
    );
};

// const test = summarizeArrayStats(['a', 8, 3, 4, 2, 6]);
// test;

export default summarizeArrayStats;
