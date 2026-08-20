import SinglyLinkedList from '../linked-list/linked-list-class-implementation.js';

class HashMap {
    constructor() {
        this.capacity = 16;
        this.setLoad = 0.75;
        this.thresLoad = this.capacity * this.setLoad;
        this.curLoad = 0;
        this.hm = [];
        this.#populate(this.hm);
    }

    #populate(hm) {
        for (let i = 0; i < this.capacity; i++) {
            hm.push(new SinglyLinkedList());
        }
    }

    #grow() {
        if (this.curLoad > this.thresLoad) {
            var entriesCopy = this.entries();
            this.capacity *= 2;
            this.thresLoad = this.capacity * this.setLoad;
            this.clear();

            for (const e of entriesCopy) {
                this.set(e[0], e[1]);
            }
        }
    }

    length() {
        return this.curLoad;
    }

    hash(key) {
        // This hashing function is provided by TOP
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode =
                (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
            /**
             * Why modulo here instead of at the end of loop?
             * With keys length exceeding the max safe int, calculations
             * may get inaccurate, catch its current capacity in the
             * loop, for when they escape they may round.
             */
        }
        // this now returns the index (bucket number)
        return hashCode;
    }

    get(key) {
        const b = this.hash(key);
        const foundNode = this.hm[b];

        let current = foundNode.head;
        if (!current) {
            return null;
        }
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    }

    set(key, val) {
        const b = this.hash(key);
        const foundNode = this.hm[b];
        let current = foundNode.head;

        if (!current) {
            this.curLoad++;
            foundNode.append(key, val);
            /**
             * #grow condition wrapped in the function itself; too many
             * if blocks here may be confusing. Addition stack O(1) ok
             */
            return this.#grow();
        }
        while (current) {
            if (current.key === key) {
                current.value = val;
                return this.#grow();
            }
            current = current.next;
        }
        this.curLoad++;
        foundNode.append(key, val);
        return this.#grow();
    }

    has(key) {
        const b = this.hash(key);
        const found = this.hm[b];

        return found.containsKey(key);
        // let current = found.head;
        // if (!current) {
        //     return false;
        // }
        // while (current) {
        //     if (current.key === key) return true;
        //     current = current.next;
        // }
        // return false;
    }

    remove(key) {
        const b = this.hash(key);
        const found = this.hm[b];
        const res = found.remove(key);
        if (res) this.curLoad--;
        return res;
    }

    clear() {
        this.hm = [];
        this.curLoad = 0;
        this.#populate(this.hm);
    }

    keys() {
        let res = [];
        for (const lli of this.hm) {
            if (lli.head) res = res.concat(lli.getKeys());
        }
        return res;
    }

    values() {
        let res = [];
        for (const lli of this.hm) {
            if (lli.head) res = res.concat(lli.getValues());
        }
        return res;
    }

    entries() {
        const res = [];
        for (const lli of this.hm) {
            let current = lli.head;
            while (current) {
                res.push([current.key, current.value]);
                current = current.next;
            }
        }
        return res;
    }
}

const res = new HashMap();
// console.log(res.hash('Rama'));
// console.log(res.hash('Sita'));
// console.log(res.hash('Rama'));
// res.set('Rama', 'red');
// res.set('Rama', 'blue');
// res.set('Sita', 'green');
// res.set('Apple', 'pink');
// res.set('Sita', 'red');
// // console.log(res.get('Sita'));
// // console.log(res.has('Rama'));
// // console.log(res.remove('Rama'));
// // console.log(res.clear());
// // console.log(res.length());
// console.log(res.hm);
// console.log(res.values());
// console.log(res.entries());

res.set('apple', 'red');
res.set('apple', 'green');
res.set('banana', 'yellow');
res.set('carrot', 'orange');
res.set('dog', 'brown');
res.set('elephant', 'gray');
res.set('frog', 'green');
res.set('grape', 'purple');
res.set('ice cream', 'white');
res.set('jacket', 'blue');
res.set('lion', 'golden');
res.set('Rama', 'black'); // collision case
res.set('Sita', 'pink'); // collision case

// console.log(res.hm);
// console.log(res.length());
// console.log(res.capacity);
// console.log(res.thresLoad);
// console.log(res.entries());

res.set('moon', 'silver');

console.log(res.hm);
console.log(res.capacity);
console.log(res.length());
console.log(res.thresLoad);
