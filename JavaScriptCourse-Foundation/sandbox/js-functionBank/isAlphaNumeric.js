function isAlphaNumeric(str) {
    return /^[a-z0-9]*$/gi.test(str);
}

console.log(isAlphaNumeric('afoij!ef1231'));