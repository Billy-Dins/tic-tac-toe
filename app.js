// Gets value of grid square selected
const gridArea = document.querySelectorAll('.gridSquare')
gridArea.forEach(element => element.addEventListener('click', () => {
  const location = element.getAttribute('id')
  if (Gameboard.board[location] === '' && Gameboard.checkWinCondition() === false) {
    Gameboard.locationSelection(location, Gameboard.changeTurn())
  }
})
)

const Gameboard = {
  gamemode: '',
  board: ['', '', '', '', '', '', '', '', ''],
  init: () => {
    Gameboard.setPlayers()
    Gameboard.setPlayerCards()
    Gameboard.setPlayerHighlight()
    Gameboard.renderPlayArea()
    Gameboard.checkDraw()
    Gameboard.checkGameMode()
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
  setPlayerHighlight: () => {
    const containerOne = document.querySelector('#playerContainer1')
    const containerTwo = document.querySelector('#playerContainer2')
    if (Gameboard.counter === true) {
      if (containerOne.getAttribute('style') === null) {
        containerTwo.removeAttribute('style')
        containerOne.setAttribute('style', 'background-color: rgb(248, 91, 248);')
      } else {
        containerOne.setAttribute('style', 'background-color: rgb(248, 91, 248);')
      }
    } else {
      containerOne.removeAttribute('style')
      containerTwo.setAttribute('style', 'background-color: rgb(248, 91, 248);')
    }
  },
  renderPlayArea: () => {
    document.querySelector('.gridSquare.zero').textContent =
      Gameboard.board[0]
    document.querySelector('.gridSquare.one').textContent =
      Gameboard.board[1]
    document.querySelector('.gridSquare.two').textContent =
     Gameboard.board[2]
    document.querySelector('.gridSquare.three').textContent =
     Gameboard.board[3]
    document.querySelector('.gridSquare.four').textContent =
     Gameboard.board[4]
    document.querySelector('.gridSquare.five').textContent =
     Gameboard.board[5]
    document.querySelector('.gridSquare.six').textContent =
     Gameboard.board[6]
    document.querySelector('.gridSquare.seven').textContent =
     Gameboard.board[7]
    document.querySelector('.gridSquare.eight').textContent =
     Gameboard.board[8]
  },
  checkDraw: () => {
    if (Gameboard.board.every(element => element !== '') && Gameboard.checkWinCondition() !== true) {
      Gameboard.winCondition('draw')
    }
  },
  makeAIMove: () => {
    const num = Math.floor(Math.random() * 9)
    if (Gameboard.board[num] === '') {
      Gameboard.counter = true
      Gameboard.locationSelection(num, 'O')
    } else {
      Gameboard.checkGameMode()
    }
  },
  checkGameMode: () => {
    if (Gameboard.gamemode === 'pvc' && Gameboard.counter === false) {
      Gameboard.makeAIMove()
    }
  },
  counter: true,
  changeTurn: () => {
    if (Gameboard.counter === true) {
      Gameboard.setPlayerHighlight('1')
      Gameboard.counter = false
      return 'X'
    } else {
      Gameboard.setPlayerHighlight('2')
      Gameboard.counter = true
      return 'O'
    }
  },
  locationSelection: (id, selection) => {
    if (Gameboard.checkWinCondition() === false) {
      Gameboard.board.splice(id, 1, selection)
      Gameboard.renderPlayArea()
      Gameboard.checkDraw()
      if (Gameboard.checkWinCondition() === true && Gameboard.gamemode === 'pvc') {
        Gameboard.winCondition(selection)
        Gameboard.counter = true
      } else if (Gameboard.checkWinCondition() === true) {
        Gameboard.winCondition(selection)
      } else {
        Gameboard.setPlayerHighlight()
        Gameboard.checkGameMode()
      }
    }
  },
  resetGrid: () => {
    Gameboard.setPlayerHighlight()
    for (let i = 0; i < Gameboard.board.length; i++) {
      Gameboard.board.splice(i, 1, '')
    };
    document.querySelector('#displayContainer').removeAttribute('style', 'z-index: 1;')
    if (document.querySelector('#display') !== null) {
      document.querySelector('#display').remove()
      Gameboard.renderPlayArea()
    } else { Gameboard.renderPlayArea() }
  },
  winCondition: (outcome) => {
    const displayContainer = document.querySelector('#displayContainer')
    displayContainer.setAttribute('style', 'z-index: 1;')
    const display = document.createElement('div')
    display.setAttribute('id', 'display')
    const displayText = document.createElement('div')
    displayText.setAttribute('id', 'textDisplay')
    if (outcome === 'X' || outcome === 'O') {
      displayText.textContent = `${outcome} is the winner!`
    } else {
      displayText.textContent = "It's a draw!"
    } display.appendChild(displayText)
    const resetBtn = document.createElement('button')
    resetBtn.textContent = 'Play Again!'
    resetBtn.setAttribute('onclick', 'Gameboard.resetGrid()')
    resetBtn.setAttribute('id', 'winnerReset')
    display.appendChild(resetBtn)
    displayContainer.appendChild(display)
  },
  checkWinCondition: () => {
    const board = Gameboard.board
    if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') {
      return true
    } else if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
      return true
    } else if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') {
      return true
    } else if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
      return true
    } else if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') {
      return true
    } else if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {
      return true
    } else if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') {
      return true
    } else if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') {
      return true
    } else if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') {
      return true
    } else if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') {
      return true
    } else if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
      return true
    } else if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
      return true
    } else if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
      return true
    } else if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
      return true
    } else if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
      return true
    } else if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
      return true
    } else {
      return false
    }
  },
  changeGameMode: () => {
    Gameboard.resetGrid()
    const changeMode = document.querySelector('#startScreen')
    changeMode.classList.remove('hidden')
  }
}

const Startscreen = {
  Gamemode: (gametype) => {
    Startscreen.addHiddenClass()
    if (gametype === 'pvc') {
      Gameboard.gamemode = 'pvc'
      Gameboard.init()
    } else {
      Gameboard.gamemode = 'pvp'
    }
  },
  addHiddenClass: () => {
    const changeMode = document.querySelector('#startScreen')
    changeMode.classList.add('hidden')
  }
}

Gameboard.init()
Gameboard.checkGameMode()
