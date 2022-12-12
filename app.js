const player = (name,type) => {
    return {name, type}
}
// Grid square render function
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

}

const makeSelection = (id, selection) => {
    let makeSelection = Gameboard.gameboard.splice(id,1, selection);
    renderPlayArea()
    return makeSelection
}

let gridArea = document.querySelectorAll('.gridSquare')

gridArea.forEach(element => element.addEventListener('click', () => {
makeSelection(element.getAttribute('id',), 'x')
}));

let Gameboard = {
    gameboard: ['','','','','','','','',''],
    init: () => {
        const player1 = player('Luke', 'Human')
    },

    addSelection: () => {

    }
}

renderPlayArea()