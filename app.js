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
const selectedArea = (index) => {
    const selection = Gameboard.gameboard.slice(index,1)
    return selection

}

const playerSelection = () => {
    if (Gameboard.counter === true) {
        Gameboard.changeTurn()
        return 'X'
    } else {
        Gameboard.changeTurn()
        return 'O'
    }
}

const locationSelection = (id, selection) => {
    let makeSelection = Gameboard.gameboard.splice(id,1, selection);
    renderPlayArea()
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
    }
    renderPlayArea()
}