const game = (() => {
    let openSqr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let turn = 0;
    let winner = undefined;
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


    function showGame(prop = 'openSqr' | 'winner' | 'turn') {
        switch (prop) {
            case 'openSqr':
                return openSqr;
            case 'winner':
                return winner;
            case 'turn':
                return turn;
        }
    }


    function createPlayer(int) {
        const pName = `Player ${int}`;
        const pNum = int;
        let score = 0;
        let sel = [];


        function showPlayer(prop = 'sel' | 'score' | 'name') {
            switch (prop) {
                case 'sel':
                    return sel;
                case 'score':
                    return score;
                case 'name':
                    return pName;
            }
        }

        function checkWinner(sel) {
            if (turn > 3) {
                for (let i = 0; i < winSqr.length; i++) {
                    const res = winSqr[i].every((sqr) => sel.includes(sqr));
                    if (res) return `${pName}`;
                }
            }
        }

        function makeMove(sqr) {
            if (!winner) {
                const currentPTurn = (turn % 2) + 1; // (log 2) : 1 | 2
                if (currentPTurn == pNum && openSqr.includes(sqr)) {
                    const index = openSqr.indexOf(sqr);
                    openSqr.splice(index, 1);
                    sel.push(sqr);
                    winner = checkWinner(sel);
                    turn++;
                }
                if (winner) console.log(`${winner} wins!`);
            } // if there's a winner, do nothing
        }

        return { makeMove, showPlayer };
    }
    
    return { createPlayer, showGame };
})();


// -------------------------------

// const p1 = game.createPlayer(1);
// const p2 = game.createPlayer(2);

// // Simulate gameplay

// p1.makeMove(1);
// p2.makeMove(2);
// p1.makeMove(9);
// p2.makeMove(4);
// p1.makeMove(5);
// p2.makeMove(8);

