const encipherCaesar = (string, shift) => {
    if (!string.length) {
        throw new Error('Input string must not be empty');
    } else if (new RegExp('[^A-Za-z \\p{P}]', 'u').test(string)) {
        throw new Error('Input string must not contain numbers');
    }

    const alpha = String.fromCharCode(
        ...Array(26)
            .keys()
            .map(i => i + 97)
    );

    const alphaShiftLowerCase = alpha
        .split('')
        .map((_, i) => alpha.at((i + shift) % alpha.length))
        .join('');

    const alphaShiftUpperCase = alpha
        .split('')
        .map((_, i) => alpha.at((i + shift) % alpha.length))
        .map(char => char.toUpperCase())
        .join('');

    const alphaToIndex = string
        .toLowerCase()
        .split('')
        .map(char => alpha.split('').findIndex(a => a == char));

    const indexToAlpha = alphaToIndex.map((index, i) => {
        if (alphaShiftUpperCase.split('').includes(string.split('').at(i)))
            return alphaShiftUpperCase.split('')[index];
        else if (string.split('').at(i) === ' ') return ' ';
        else if (new RegExp('\\p{P}', 'gu').test(string.split('').at(i)))
            return string.split('').at(i);
        else return alphaShiftLowerCase.split('')[index];
    });

    return indexToAlpha.join('');
};

// const res = encipherCaesar('Hello WOrlD!@?', 3);
// res;

export default encipherCaesar;
