const arr = [2, 5, 3, 4, 2, 4, 5, 11];

const sortCountArr0 = (arr) => {
  // O (n log n)
  const sortedArr = arr.sort((a, b) => a - b);

  let prev = sortedArr[0];
  let res = [];
  let length = 0;

  // O(n)
  for (let n of sortedArr) {
    if (n !== prev) {
      res.push({ item: prev, count: length });
      length = 1;
      prev = n;
    } else {
      length++;
    }
  }
  res.push({ item: prev, count: length });
  return res;
};

const sortCountArr = (arr) => {
  const map = new Map();

  for (let n of arr) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  return map;
};

// const res = sortCountArr(arr);
// res;

export default sortCountArr;
