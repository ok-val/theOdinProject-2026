const ticTacToe = (() => {
    let openSqr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const winSqr = [
        [1, 2, 3],
        [3, 6, 9],
        [7, 8, 9],
        [1, 4, 7],
        [1, 5, 9],
        [3, 5, 7],
        [2, 5, 8],
        [4, 5, 6],
    ]

    const displayOpenSqr = () => openSqr;

    const createPlayer = (num) => {
        const name = `Player ${num}`;
        let sel = [];

        const addToSel = (sqr) => {
            if (openSqr.includes(sqr)) {
                // moveSqr(sqr);
                const index = openSqr.indexOf(sqr);
                const [sqrToMove] = openSqr.splice(index, 1);
                sel.push(sqrToMove);
            }
        }

        const displaySel = () => console.log(sel);

        return { name, addToSel, displaySel };
    }

    return { displayOpenSqr, createPlayer };
})();


// -------------------------------
// ticTacToe.moveSqr(1);


const p1 = ticTacToe.createPlayer(1);
const p2 = ticTacToe.createPlayer(2);
// const p2 = createPlayer(2);

// Simulate gameplay

p1.addToSel(1);
console.log(ticTacToe.displayOpenSqr());
p1.displaySel();
// p1.addToSel(2);
// p1.displaySel();