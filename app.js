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
  init: () => {
    Gameboard.setPlayers()
    Gameboard.setPlayerCards()
  }
}

const gridArea = document.querySelectorAll('.gridSquare')
gridArea.forEach(element => element.addEventListener('click', () => {
  const location = element.getAttribute('id')
  if (Gameboard.gameboard[location] === '') {
    locationSelection(location, playerSelection())
  }
})
)

const renderPlayArea = () => {
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
  resetBtn.setAttribute('onclick', 'resetGrid()')
  resetBtn.setAttribute('id', 'winnerReset')
  display.appendChild(resetBtn)

  displayContainer.appendChild(display)
}

const checkWinCondition = () => {
  const board = Gameboard.gameboard
  if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') {
    winCondition('X')
    return true
  } else if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
    winCondition('O')
    return true
  } else if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') {
    winCondition('X')
    return true
  } else if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
    winCondition('O')
    return true
  } else if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') {
    winCondition('X')
    return true
  } else if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {
    winCondition('O')
    return true
  } else if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') {
    winCondition('X')
    return true
  } else if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') {
    winCondition('O')
    return true
  } else if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') {
    winCondition('X')
    return true
  } else if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') {
    winCondition('O')
    return true
  } else if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
    winCondition('X')
    return true
  } else if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
    winCondition('O')
    return true
  } else if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
    winCondition('X')
    return true
  } else if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
    winCondition('O')
    return true
  } else if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
    winCondition('X')
    return true
  } else if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
    winCondition('O')
    return true
  }
}

const locationSelection = (id, selection) => {
  const makeSelection = Gameboard.gameboard.splice(id, 1, selection)
  renderPlayArea()
  if (checkWinCondition() === true) {
    console.log('hello')
  }
  return makeSelection
}

// eslint-disable-next-line no-unused-vars
const resetGrid = () => {
  for (let i = 0; i < Gameboard.gameboard.length; i++) {
    Gameboard.gameboard.splice(i, 1, '')
  };
  document.querySelector('#displayContainer').removeAttribute('style', 'z-index: 1;')
  Gameboard.counter = true
  document.querySelector('#display').remove()
  renderPlayArea()
}

Gameboard.init()
