function makeLinkedList() {
    let list = {};

    const append = val => {
        const node = makeNode(val);
        if (!Object.keys(list).length) {
            return Object.assign(list, node);
        }
        const que = [list];
        while (que.length > 0) {
            const cur = que.shift();
            if (!cur.next) {
                cur.next = node;
            } else {
                que.push(cur.next);
            }
        }
    };

    const prepend = val => {
        const node = makeNode(val);
        if (!Object.keys(list).length) {
            return Object.assign(list, node);
        }
        return Object.assign(list, { value: val, next: { ...list } });
    };

    const size = () => {
        if (!Object.keys(list).length) return 0;
        const que = [list];
        let sum = 0;
        while (que.length > 0) {
            const cur = que.shift();
            sum += 1;
            if (cur.next) {
                que.push(cur.next);
            }
        }
        return sum;
    };

    const head = () => {
        return Object.keys(list) ? list.value : undefined;
    };

    const tail = () => {
        const que = [list];
        while (que.length > 0) {
            const cur = que.shift();
            if (cur.next) {
                que.push(cur.next);
            } else {
                return cur.value;
            }
        }
    };

    const at = index => {
        let i = index >= 0 ? index : size() + index;
        const que = [list];
        while (que.length > 0) {
            const cur = que.shift();
            i--;
            if (i === -1) {
                return cur ? cur.value : undefined;
            }
            if (cur.next) que.push(cur.next);
        }
    };

    const pop = () => {
        const res = list.value;
        Object.assign(list, list.next);
        return res;
    };

    const contains = val => {
        const que = [list];
        while (que.length) {
            const cur = que.shift();
            if (cur.value === val) {
                return true;
            }
            if (cur.next) que.push(cur.next);
        }
        return false;
    };

    const findIndex = val => {
        const que = [list];
        let i = 0;
        while (que.length) {
            const cur = que.shift();
            if (cur.value === val) {
                return i;
            }
            if (cur.next) {
                i++;
                que.push(cur.next);
            }
        }
        return -1;
    };

    const toString = () => {
        if (!Object.keys(list).length) {
            return '';
        }
        let res = '';
        const que = [list];
        while (que.length) {
            const cur = que.shift();
            if (cur.value) res += `(${cur.value})`;
            if (cur.next) {
                res += ' -> ';
                que.push(cur.next);
            } else {
                res += ' -> null';
            }
        }
        return res;
    };

    const insertAt = (index, ...vals) => {
        const indexQue = [list];
        let i = index >= 0 ? index : size() + index;
        var cachedPop = [];
        while (indexQue.length && i >= 0) {
            const cur = indexQue.shift();
            if (cur.next) {
                i--;
                indexQue.push(cur.next);
            }
            if (i >= 0) {
                cachedPop.push(pop());
            }
        }
        if (!indexQue.length && i !== 0)
            throw new RangeError('Index out of range');

        // Use prepend() to avoid append() which nests another while loop
        for (let j = vals.length - 1; j >= 0; j--) {
            prepend(vals[j]);
        }

        for (let k = cachedPop.length - 1; k >= 0; k--) {
            prepend(cachedPop[k]);
        }
    };

    const removeAt = index => {
        let i = index;
        i;
        const que = [list];
        while (que.length && i >= 0) {
            const cur = que.shift();
            if (cur.next) {
                que.push(cur.next);
            }
            if (i === 0) {
                Object.assign(cur, cur.next);
            }
            i--;
        }
        if (!que.length && i !== 0) throw new RangeError('Index out of range');
    };

    return {
        list,
        append,
        prepend,
        size,
        head,
        tail,
        at,
        pop,
        contains,
        findIndex,
        toString,
        insertAt,
        removeAt
    };
}

function makeNode(val) {
    const value = val;
    const next = null;
    return { value, next };
}

let res = makeLinkedList();
res.append(3);
res.append(4);
res.append(5);
res.prepend(2);
res.prepend(1);
// console.log(res.head());
// console.log(res.tail());
// console.log(res.size());
// console.log(res.at(-1));
// console.log(res.at(0));
// console.log(res.pop());
// console.log(res.contains(2));
// console.log(res.findIndex(4));
console.log(res.toString());
console.log(res.insertAt(3, 6, 7, 8));
console.log(res.toString());
console.log(res.removeAt(4));
console.log(res.toString());

// const res1 = makeNode();
// res1;
