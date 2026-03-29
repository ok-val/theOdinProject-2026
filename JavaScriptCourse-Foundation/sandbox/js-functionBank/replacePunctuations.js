const palindromes = function (str) {
    let flipped = str.toLowerCase()
        .replace(/\s/g, '')
        .replace(/[\p{P}]/gu, '') // this is the RegEx syntax for punctuations
        .split('')
        .reverse()
        .join('');
    console.log(flipped);
    return (str.toLowerCase()
        .replace(/\s/g, '')
        .replace(/[\p{P}]/gu, '')
        .split('')
        .join('') === flipped);
};