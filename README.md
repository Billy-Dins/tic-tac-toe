## The Odin Project
This project was built using [The Odin Project curriculum](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe)
The intent of this project is to use as little global code as possible. Instead trying to store everything inside of a module or factory.



1. Store gameboard as an array within a Gameboard object.


2. Set up a function that will render the contents of gameboard array to the webpage.

3. Functions that allow players to add marks to a specific spot on the board and tie it to the DOM.

4. include logic that keeps players from playing in already taken spots.

5. Build the logic that checks for when the game is over.


----- Testing -----
- init returns 2 players and their associated marker.
- if turn counter is 1, run function with value of array[0] else run function with value of array[1]
- function then gets value of selected square and changes with the input value of players marker key-value.
