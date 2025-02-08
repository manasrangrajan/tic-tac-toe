let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

const cellElements = document.querySelectorAll('td');
const resetButton = document.getElementById('reset-button');

cellElements.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameOver) return;
        if (gameBoard[index] !== '') return;

        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer.toLowerCase());

        checkWinner();
        switchPlayer();
    });
});

resetButton.addEventListener('click', resetGame);

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        if (
            gameBoard[combination[0]] !== '' &&
            gameBoard[combination[0]] === gameBoard[combination[1]] &&
            gameBoard[combination[0]] === gameBoard[combination[2]]
        ) {
            gameOver = true;
            alert(`Player ${currentPlayer} wins!`);
        }
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;

    cellElements.forEach((cell) => {
        cell.textContent = '';
        cell.classList.remove('x', 'o');
    });
}