'use strict';

const playerOne = {
    name: "User",
    value: "X",
    score: 0,
    displayedName: document.querySelector(".playerOne .name"),
    displayedScore: document.querySelector(".playerOne .score"),
}

const playerTwo = {
    name: "Dumb Computer",
    value: "O",
    score: 0,
    displayedName: document.querySelector(".playerTwo .name"),
    displayedScore: document.querySelector(".playerTwo .score")
}

class GameBoard {
    constructor() {
        this.board = [
            ' ', ' ', ' ', 
            ' ', ' ', ' ',
            ' ', ' ', ' '
        ]

        this.#createCells()
        this.cells = document.querySelectorAll(".cell");
        this.cells.forEach(cell => cell.addEventListener('click', this.#makeMove));
        this.players = [playerTwo, playerOne];
        this.currentPlayer = this.players[0];

        this.row1 = this.board.slice(0, 3);
        this.row2 = this.board.slice(3, 6);
        this.row3 = this.board.slice(6);

        this.col1 = [
            this.board[0],
            this.board[3],
            this.board[6],
        ]
        this.col2 = [
            this.board[1],
            this.board[4],
            this.board[7],
        ]

        this.col3 = [
            this.board[2],
            this.board[5],
            this.board[8],
        ]

        this.diag1 = [
            this.board[0],
            this.board[4],
            this.board[8],
        ]

        this.diag2 = [
            this.board[2],
            this.board[4],
            this.board[6],
        ]

        this.winingLines = [
            this.col1,
            this.col2,
            this.col3,
            this.row1,
            this.row2,
            this.row3,
            this.diag1,
            this.diag2
        ]
    }
    #createCells() {
        for (let i = 0; i < this.board.length; i++) {
            this.board[i] = {value: ' '};
        } 
    }

    #boardIsFull() {
        const emptyCells = this.board.filter(cell => cell.value == ' ');
        return emptyCells.length == 0;
    }
    #hasWinner(line) {
        const result = line.reduce(((a, b) => a + b.value), "");
        if (result == currentPlayer.value.repeat(3)) {
            return true;
        } else {
            return false;
        }
    }
    #checkState() {
        for (let line of this.winingLines) {
            if (this.#hasWinner(line)) {
                console.log(`${currentPlayer.name} has won.`);
                return true;
            } else if (this.#boardIsFull()) {
                console.log("It's a draw!");
                return true;
            }
        }
    }
    #cellIsEmpty(idx) {
        return this.board[idx].value == ' ';
    }

    #wtf() {
        return true;
    }

    #switchPlayers() {
        currentPlayer = players.shift();
        players.push(currentPlayer);
    }
    #makeMove(event) {
        const cellId = event.target.dataset['id'];
        let cellEmpty = wtf();
        if (cellEmpty) {
            this.cells[cellId].innerHTML = this.currentPlayer.value;
            this.board[cellId].value = this.currentPlayer.value;
            console.log(`Putting my ${this.currentPlayer.value} mark here!`);
        } else {
            console.log("Cell is occupied");
        }
    
        const gameFinished = this.#checkState();
        if (gameFinished) {
            this.cells.forEach(cell => cell.removeEventListener('click', this.makeMove));
        }
        this.#switchPlayers();
    } 
}


let myGame = new GameBoard;
