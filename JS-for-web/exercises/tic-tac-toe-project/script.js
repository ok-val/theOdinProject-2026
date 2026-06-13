// 1. Get the game to work on console
// 1.1. Use only factories for instances and IIFE for one-offs


let availableSqr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let p1Sqr = []; // p1 always starts first
let p2Sqr = [];

let p1Score = 0;
let p2Score = 0;

const winningSqr = [
    [1, 2, 3],
    [3, 6, 9],
    [7, 8, 9],
    [1, 4, 7],
    [1, 5, 9],
    [3, 5, 7],
    [2, 5, 8],
    [4, 5, 6],
]


// Move square
function markSqr(sel) {
    // Player choose a square (sel)
    var roundWinner;

    // Check if square is available to select
    if (availableSqr.indexOf(sel) + 1) {
        // Use destructuring to unpack from the list that's returned by .splice().
        let [sqrToPush] = availableSqr.splice(availableSqr.indexOf(sel), 1);
        if (p1Sqr.length == p2Sqr.length) { // p1 leads
            p1Sqr.push(sqrToPush);
            roundWinner = checkWinner(p1Sqr) ? 'p1' : undefined;
        } else {
            p2Sqr.push(sqrToPush);
            roundWinner = checkWinner(p2Sqr) ? 'p2' : undefined;
        }
    }

    switch (roundWinner) {
        case 'p1':
            console.log('P1 wins');
            break;
        case 'p2':
            console.log('P2 wins');
            break;
    }
}

function checkWinner(sqrsToCheck) {
    // Runs only when one of the players' square count is at least 3
    if (sqrsToCheck.length >= 3) {
        for (let i = 0; i < 8; i++) {
            const combo = winningSqr[i];
            const isMatch = combo.every((sqr) => sqrsToCheck.includes(sqr));
            if (isMatch) return isMatch;
        }
    }
}


// Simulate gameplay
markSqr(5);
markSqr(4);
markSqr(3);
markSqr(1);
markSqr(8);
markSqr(8);
// say if p2 selects the same square, nothing happens
markSqr(7);

console.log(p1Sqr);
console.log(p2Sqr);
