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

function dfsPreorder(tree) {
    let res = [];
    if (tree.value) {
        res = res.concat(tree.value);
    }
    if (tree.left) {
        res = res.concat(dfsPreorder(tree.left));
    }
    if (tree.right) {
        res = res.concat(dfsPreorder(tree.right));
    }
    return res;
}

function dfsInorder(tree) {
    let res = [];
    if (tree.left) {
        res = res.concat(dfsInorder(tree.left));
    }
    if (tree.value) {
        res = res.concat(tree.value);
    }
    if (tree.right) {
        res = res.concat(dfsInorder(tree.right));
    }
    return res;
}

function dfsPostorder(tree) {
    let res = [];
    if (tree.left) {
        res = res.concat(dfsPostorder(tree.left));
    }
    if (tree.right) {
        res = res.concat(dfsPostorder(tree.right));
    }
    if (tree.value) {
        res = res.concat(tree.value);
    }
    return res;
}

const res = dfsPostorder(tree);
res;
// console.log(tree.left);
