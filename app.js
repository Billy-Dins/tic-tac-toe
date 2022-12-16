const gridArea = document.querySelectorAll('.gridSquare')
gridArea.forEach(element => element.addEventListener('click', () => {
  const location = element.getAttribute('id')
  if (Gameboard.gameboard[location] === '') {
    Gameboard.locationSelection(location, Gameboard.playerSelection())
  }
})
)

const Gameboard = {
  gameboard: ['', '', '', '', '', '', '', '', ''],
  counter: true,
  changeTurn: () => {
    if (Gameboard.counter === true) {
      Gameboard.counter = false
    } else {
      Gameboard.counter = true
    }
  },
  setPlayers: () => {
    const player = (name, marker) => {
      return { name, marker }
    }
    const player1 = player('Player One', 'X')
    const player2 = player('Player Two', 'O')
    return [player1, player2]
  },
  setPlayerCards: () => {
    const playerOne = document.querySelector('#playerOne')
    const playerOneMarker = document.querySelector('#playerOneMarker')
    playerOne.textContent = Gameboard.setPlayers()[0].name
    playerOneMarker.textContent = `marker: ${Gameboard.setPlayers()[0].marker}`
    const playerTwo = document.querySelector('#playerTwo')
    const playerTwoMarker = document.querySelector('#playerTwoMarker')
    playerTwo.textContent = Gameboard.setPlayers()[1].name
    playerTwoMarker.textContent = `marker: ${Gameboard.setPlayers()[1].marker}`
  },
  renderPlayArea: () => {
    document.querySelector('.gridSquare.zero').textContent =
      Gameboard.gameboard[0]
    document.querySelector('.gridSquare.one').textContent =
      Gameboard.gameboard[1]
    document.querySelector('.gridSquare.two').textContent =
     Gameboard.gameboard[2]
    document.querySelector('.gridSquare.three').textContent =
     Gameboard.gameboard[3]
    document.querySelector('.gridSquare.four').textContent =
     Gameboard.gameboard[4]
    document.querySelector('.gridSquare.five').textContent =
     Gameboard.gameboard[5]
    document.querySelector('.gridSquare.six').textContent =
     Gameboard.gameboard[6]
    document.querySelector('.gridSquare.seven').textContent =
     Gameboard.gameboard[7]
    document.querySelector('.gridSquare.eight').textContent =
     Gameboard.gameboard[8]
  },
  init: () => {
    Gameboard.setPlayers()
    Gameboard.setPlayerCards()
    Gameboard.renderPlayArea()
  },
  winCondition: (winner) => {
    const displayContainer = document.querySelector('#displayContainer')
    displayContainer.setAttribute('style', 'z-index: 2;')
    const display = document.createElement('div')
    display.setAttribute('id', 'display')
    const displayText = document.createElement('div')
    displayText.setAttribute('id', 'textDisplay')
    displayText.textContent = `Winner is ${winner}!`
    display.appendChild(displayText)
    const resetBtn = document.createElement('button')
    resetBtn.textContent = 'Play Again!'
    resetBtn.setAttribute('onclick', 'Gameboard.resetGrid()')
    resetBtn.setAttribute('id', 'winnerReset')
    display.appendChild(resetBtn)
    displayContainer.appendChild(display)
  },
  locationSelection: (id, selection) => {
    const makeSelection = Gameboard.gameboard.splice(id, 1, selection)
    Gameboard.renderPlayArea()
    if (Gameboard.checkWinCondition() === true) {
      console.log('hello')
    }
    return makeSelection
  },
  resetGrid: () => {
    for (let i = 0; i < Gameboard.gameboard.length; i++) {
      Gameboard.gameboard.splice(i, 1, '')
    };
    document.querySelector('#displayContainer').removeAttribute('style', 'z-index: 1;')
    Gameboard.counter = true
    document.querySelector('#display').remove()
    Gameboard.renderPlayArea()
  },
  // Alternates between player one's turn and player two's turn
  playerSelection: () => {
    if (Gameboard.counter === true) {
      Gameboard.changeTurn()
      return 'X'
    } else {
      Gameboard.changeTurn()
      return 'O'
    }
  },
  checkWinCondition: () => {
    const board = Gameboard.gameboard
    if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') {
      Gameboard.winCondition('X')
      return true
    } else if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
      Gameboard.winCondition('O')
      return true
    } else if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') {
      Gameboard.winCondition('X')
      return true
    } else if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
      Gameboard.winCondition('O')
      return true
    } else if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') {
      Gameboard.winCondition('X')
      return true
    } else if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {
      Gameboard.winCondition('O')
      return true
    } else if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') {
      Gameboard.winCondition('X')
      return true
    } else if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') {
      Gameboard.winCondition('O')
      return true
    } else if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') {
      Gameboard.winCondition('X')
      return true
    } else if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') {
      Gameboard.winCondition('O')
      return true
    } else if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
      Gameboard.winCondition('X')
      return true
    } else if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
      Gameboard.winCondition('O')
      return true
    } else if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
      Gameboard.winCondition('X')
      return true
    } else if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
      Gameboard.winCondition('O')
      return true
    } else if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
      Gameboard.winCondition('X')
      return true
    } else if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
      Gameboard.winCondition('O')
      return true
    }
  },
  changeGameMode: () => {
    const changeMode = document.querySelector('#startScreen')
    changeMode.classList.remove('hidden')
  }
}

const Startscreen = {
  addHiddenClass: () => {
    const changeMode = document.querySelector('#startScreen')
    changeMode.classList.add('hidden')
  }
}
Gameboard.init()
