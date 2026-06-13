// 1. Get the game to work on console
// 1.1. Use only factories for instances and IIFE for one-offs


let availableSqr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let p1Sqr = []; // p1 always starts first
let p2Sqr = [];


// Move square
function markSqr(sel) {
    // Player choose a square (sel)
    
    // Check if square is available to select
    if (availableSqr.indexOf(sel) + 1) {
        // Use destructuring to unpack from the list that's returned by .splice().
        let [sqrToPush] = availableSqr.splice(availableSqr.indexOf(sel), 1);
        if (p1Sqr.length == p2Sqr.length) { // p1 leads
            p1Sqr.push(sqrToPush);
        } else {
            p2Sqr.push(sqrToPush);
        }
    } // nothing happens, still p2 turn
}

markSqr(2);
// say if p2 selects the same square, nothing happens
markSqr(2);
markSqr(3);

console.log(p1Sqr);
console.log(p2Sqr);

// Check winner

// Change player turn