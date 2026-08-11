const reverseString = string => {
    if (!string.length) {
        throw new Error('Input string must not be empty');
    } else if (new RegExp('[^A-Za-z ]').test(string)) {
        // console.log(new RegExp('[^A-Za-z ]').test(string));
        throw new Error('Input string must not contain numbers');
    }

    const split = string.split('');

    // Fancy oneliner
    return split.map((_, i) => split.at(split.length - i - 1)).join('');

    //
    // const reverseSplit = (i, ...charStack) => {
    //     // console.log(split.length);
    //     // console.log(i);
    //     // console.log(split.length - i);
    //     return [split.at(split.length - i), ...charStack];
    // };

    // const resSplit = split.map((char, i) => {
    //     return reverseSplit(i + 1);
    // });

    // return split
    //     .map((_, i) => {
    //         return split.at(split.length - i - 1);
    //     })
    //     .join('');
};

// const test = reverseString('hello');
// test;

export default reverseString;
