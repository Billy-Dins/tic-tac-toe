const player = (name,type) => {
    return {name, type}
}
let gridArea = document.querySelectorAll('.gridSquare')
gridArea.forEach(element => element.addEventListener('click', () => {
    let location = element.getAttribute('id')
        if (Gameboard.gameboard[location] === '') {
        locationSelection(location, playerSelection())
        } else {
            return
        }
    })
);

const renderPlayArea = () => {
    document.querySelector('.gridSquare.zero').textContent = Gameboard.gameboard[0]
    document.querySelector('.gridSquare.one').textContent = Gameboard.gameboard[1]
    document.querySelector('.gridSquare.two').textContent = Gameboard.gameboard[2]
    document.querySelector('.gridSquare.three').textContent = Gameboard.gameboard[3]
    document.querySelector('.gridSquare.four').textContent = Gameboard.gameboard[4]
    document.querySelector('.gridSquare.five').textContent = Gameboard.gameboard[5]
    document.querySelector('.gridSquare.six').textContent = Gameboard.gameboard[6]
    document.querySelector('.gridSquare.seven').textContent = Gameboard.gameboard[7]
    document.querySelector('.gridSquare.eight').textContent = Gameboard.gameboard[8]
}

// Alternates between player one's turn and player two's turn
const playerSelection = () => {
    if (Gameboard.counter === true) {
        Gameboard.changeTurn()
        return 'X'
    } else {
        Gameboard.changeTurn()
        return 'O'
    }
}

const winCondition = (winner) => {
    let display = document.createElement('div')
    display.setAttribute('id', 'display')
    let displayText = document.createElement('div')
    displayText.setAttribute('id', 'textDisplay')
    displayText.textContent = `Winner is ${winner}!`
    display.appendChild(displayText)
    let resetBtn = document.createElement('button')
    resetBtn.textContent = 'Reset'
    resetBtn.setAttribute('onclick', 'resetGrid()')
    resetBtn.setAttribute('id', 'winnerReset')
    display.appendChild(resetBtn)
    let displayContainer = document.querySelector('#displayContainer')
    displayContainer.appendChild(display)
}

const checkWinCondition = () => {
    let board = Gameboard.gameboard
    if (board[0] == 'X' && board[1] == 'X' && board[2] == 'X'){
        winCondition('X')
    } else if (board[0] == 'O' && board[1] == 'O' && board[2] == 'O'){
        winCondition('O')
    } else if (board[3] == 'X' && board[4] == 'X' && board[5] == 'X'){
        winCondition('X')
    } else if (board[3] == 'O' && board[4] == 'O' && board[5] == 'O'){
        winCondition('O')
    } else if (board[6] == 'X' && board[7] == 'X' && board[8] == 'X'){
        winCondition('X')
    } else if (board[6] == 'O' && board[7] == 'O' && board[8] == 'O'){
        winCondition('O')
    } else if (board[0] == 'X' && board[3] == 'X' && board[6] == 'X'){
        winCondition('X')
    } else if (board[0] == 'O' && board[3] == 'O' && board[6] == 'O'){
        winCondition('O')
    } else if (board[1] == 'X' && board[4] == 'X' && board[7] == 'X'){
        winCondition('X')
    } else if (board[1] == 'O' && board[4] == 'O' && board[7] == 'O'){
        winCondition('O')
    } else if (board[2] == 'X' && board[5] == 'X' && board[8] == 'X'){
        winCondition('X')
    } else if (board[2] == 'O' && board[5] == 'O' && board[8] == 'O'){
        winCondition('O')
    } else if (board[0] == 'X' && board[4] == 'X' && board[8] == 'X'){
        winCondition('X')
    } else if (board[0] == 'O' && board[4] == 'O' && board[8] == 'O'){
        winCondition('O')
    } else if (board[2] == 'X' && board[4] == 'X' && board[6] == 'X'){
        winCondition('X')
    } else if (board[2] == 'O' && board[4] == 'O' && board[6] == 'O'){
        winCondition('O')
    }
};
/*     || (board[3] && board[4] && board[5])  === 'X' 
    || (board[3] && board[4] && board[5])  === 'O'
    || (board[6] && board[7] && board[8])  === 'X' 
    || (board[6] && board[7] && board[8])  === 'O'

    || (board[0] && board[3] && board[6])  === 'X' 
    || (board[0] && board[3] && board[6])  === 'O'
    || (board[1] && board[4] && board[7])  === 'X' 
    || (board[1] && board[4] && board[7])  === 'O'
    || (board[2] && board[5] && board[8])  === 'X' 
    || (board[2] && board[5] && board[8])  === 'O'

    || (board[0] && board[4] && board[8])  === 'X' 
    || (board[0] && board[4] && board[8])  === 'O'
    || (board[2] && board[4] && board[6])  === 'X' 
    || (board[2] && board[4] && board[6])  === 'O'
    ) {
        console.log('winner')
    }
} */

const locationSelection = (id, selection) => {
    let makeSelection = Gameboard.gameboard.splice(id,1, selection);
    renderPlayArea()
    checkWinCondition()
    return makeSelection
}


let Gameboard = {
    counter: true,
    changeTurn: () => {
        if (Gameboard.counter === true) {
            return Gameboard.counter = false
        } else {
            return Gameboard.counter = true
        }
    },
    gameboard: ['','','','','','','','',''],
    init: () => {
        const player1 = player('Luke', 'Human')
    },
}


const resetGrid = () => {
    for (let i = 0; i < Gameboard.gameboard.length; i++) {
        Gameboard.gameboard.splice(i, 1, '')
    };
    Gameboard.counter = true;
    document.querySelector('#display').remove()
    renderPlayArea();
}