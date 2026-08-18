const tree = {
    value: 'F',
    left: {
        value: 'D',
        left: {
            value: 'B',
            left: {
                value: 'A',
                left: null,
                right: null
            },
            right: {
                value: 'C',
                left: null,
                right: null
            }
        },
        right: {
            value: 'E',
            left: null,
            right: null
        }
    },
    right: {
        value: 'J',
        left: {
            value: 'G',
            left: null,
            right: {
                value: 'I',
                left: {
                    value: 'H',
                    left: null,
                    right: null
                },
                right: null
            }
        },
        right: {
            value: 'K',
            left: null,
            right: null
        }
    }
};

function bfs(tree) {
    const res = [];
    const que = [tree];
    while (que.length > 0) {
        // 1. dequeue
        const cur = que.shift();
        // 2. visit
        res.push(cur.value);
        // 3. enqueue
        if (cur.left) {
            que.push(cur.left);
        }
        if (cur.right) {
            que.push(cur.right);
        }
    }
    return res;
}
const res = bfs(tree);
res;
