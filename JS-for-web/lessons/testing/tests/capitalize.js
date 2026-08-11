const capitalize = string => {
    if (!string.length) {
        throw new Error('Input string must not be empty');
    } else if (new RegExp('[^A-Za-z ]').test(string)) {
        // console.log(new RegExp('[^A-Za-z ]').test(string));
        throw new Error('Input string must not contain numbers');
    }
    return string
        .trim(' ')
        .split(' ')
        .map(w => {
            return w[0].toUpperCase() + w.slice(1);
        })
        .join(' ');
};

// const res = capitalize(' hello world ');
// res;

export default capitalize;
