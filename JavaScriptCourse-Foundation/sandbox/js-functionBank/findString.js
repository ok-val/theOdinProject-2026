let str = 'abababc';

function findString(str, qStr) {
    for (let i = 0; i <= (str.length - qStr.length); i++) {
        let qSlice = str.slice(i, i + qStr.length);
        if (qStr === qSlice) return true;
    }
    return false;
}

console.log(findString(str, 'bc'));