const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

function countData(arr) {
    return arr.reduce((acc, dt) => {
        acc[dt] = arr.filter((val) => val === dt).length;
        return acc;
    }, {});
}

let countedData = countData(data);
console.log(countedData);