// "use strict";

// const statusBox = document.querySelector(".status");

// const playerOne = {
//     name: "User",
//     value: "X",
//     score: 0,
//     displayedName: document.querySelector(".playerOne .name"),
//     displayedScore: document.querySelector(".playerOne .score"),
// }

// const playerTwo = {
//     name: "Dumb Computer",
//     value: "O",
//     score: 0,
//     displayedName: document.querySelector(".playerTwo .name"),
//     displayedScore: document.querySelector(".playerTwo .score")
// }

// const boardArray = new Array(9);

// function createCell() {
//     let cell = {
//         value: ' '
//     }
//     return cell;
// }

// for (let i = 0; i < boardArray.length; i++) {
//     boardArray[i] = createCell();
// } 

// const row1 = boardArray.slice(0, 3);
// const row2 = boardArray.slice(3, 6);
// const row3 = boardArray.slice(6);

// const col1 = [
//     boardArray[0],
//     boardArray[3],
//     boardArray[6],
// ]

// const col2 = [
//     boardArray[1],
//     boardArray[4],
//     boardArray[7],
// ]

// const col3 = [
//     boardArray[2],
//     boardArray[5],
//     boardArray[8],
// ]

// const diag1 = [
//     boardArray[0],
//     boardArray[4],
//     boardArray[8],
// ]

// const diag2 = [
//     boardArray[2],
//     boardArray[4],
//     boardArray[6],
// ]

// const winingLines = [
//     col1,
//     col2,
//     col3,
//     row1,
//     row2,
//     row3,
//     diag1,
//     diag2
// ]

// function checkState() {
//     for (let line of winingLines) {
//         if (hasWinner(line)) {
//             console.log(`${currentPlayer.name} has won.`);
//             return true;
//         } else if (isFull()) {
//             console.log("It's a draw!");
//             return true;
//         }
//     }

//     function hasWinner(line) {
//         const result = line.reduce(((a, b) => a + b.value), "");
//         if (result == currentPlayer.value.repeat(3)) {
//             return true;
//         } else {
//             return false;
//         }
//     }

//     function isFull() {
//         const emptyCells = boardArray.filter(cell => cell.value == ' ');
//         return emptyCells.length == 0;

//     }
// }

// // function createPlayer(name, value) {
// //     return { name, value}
// // }

// // const playerOne = createPlayer("User", "X");
// // const playerTwo = createPlayer("Computer", "O");
// const players = [playerTwo, playerOne];
// let currentPlayer = playerOne;

// function switchPlayers() {
//     currentPlayer = players.shift();
//     players.push(currentPlayer);
// }

// function cellIsEmpty(idx) {
//     return boardArray[idx].value == ' ';
// }

// const cells = document.querySelectorAll(".cell");
// cells.forEach(cell => cell.addEventListener('click', makeMove));

// function makeMove(event) {
//     const cellId = event.target.dataset['id'];
    
//     if (cellIsEmpty(cellId)) {
//         cells[cellId].innerHTML = currentPlayer.value;
//         boardArray[cellId].value = currentPlayer.value;
//         console.log(`Putting my ${currentPlayer.value} mark here!`);
//     } else {
//         console.log("Cell is occupied");
//     }

//     const gameFinished = checkState();
//     if (gameFinished) {
//         cells.forEach(cell => cell.removeEventListener('click', makeMove));
//     }
//     switchPlayers();
// } 








