/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/* eslint-disable complexity */
let squares = document.querySelectorAll ("td");
let tableObject = {};
const player1 = 'X';
const player2 = 'O';
let currentPlayer = player1;
let player1Board = [];
let player2Board =[];

// change who's turn it is and log that information to the screen
let changePlayer = function() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
  let node = document.createElement("p");
  let text = document.createTextNode(`Player ${currentPlayer}'s turn`);
  node.appendChild(text);
  document.querySelector(".currentMove").appendChild(node);
}

// check to see if there is a winner or if all squares are clicked (cat's game)
let checkIfWinner = function() {
  if (Object.keys(tableObject).length === 9) {
    alert('Cat\'s Game!!')
  } else {
    for (let key in tableObject) {
      if (tableObject[key] === 'X') {
        player1Board.push(key);
      } else {
        player2Board.push(key);
      }
    }
  }
    if (player1Board.includes('1') && player1Board.includes('2') && player1Board.includes('3')) {
      alert('Player One Wins!')
    } else
      if (player1Board.includes('4') && player1Board.includes('5') && player1Board.includes('6')) {
        alert('Player One Wins!')
      } else
      if (player1Board.includes('7') && player1Board.includes('8') && player1Board.includes('9')) {
        alert('Player One Wins!')
      } else
      if (player1Board.includes('1') && player1Board.includes('4') && player1Board.includes('7')) {
        alert('Player One Wins!')
      } else
      if (player1Board.includes('2') && player1Board.includes('5') && player1Board.includes('8')) {
        alert('Player One Wins!')
      } else
      if (player1Board.includes('3') && player1Board.includes('6') && player1Board.includes('9')) {
        alert('Player One Wins!')
      } else
      if (player1Board.includes('1') && player1Board.includes('5') && player1Board.includes('9')) {
        alert('Player One Wins!')
      } else
      if (player1Board.includes('3') && player1Board.includes('5') && player1Board.includes('7')) {
        alert('Player One Wins!')
      }
      if (player2Board.includes('1') && player2Board.includes('2') && player2Board.includes('3')) {
        alert('Player Two Wins!')
      } else
        if (player2Board.includes('4') && player2Board.includes('5') && player2Board.includes('6')) {
          alert('Player Two Wins!')
        } else
        if (player2Board.includes('7') && player2Board.includes('8') && player2Board.includes('9')) {
          alert('Player Two Wins!')
        } else
        if (player2Board.includes('1') && player2Board.includes('4') && player2Board.includes('7')) {
          alert('Player Two Wins!')
        } else
        if (player2Board.includes('2') && player2Board.includes('5') && player2Board.includes('8')) {
          alert('Player Two Wins!')
        } else
        if (player2Board.includes('3') && player2Board.includes('6') && player2Board.includes('9')) {
          alert('Player Two Wins!')
        } else
        if (player2Board.includes('1') && player2Board.includes('5') && player2Board.includes('9')) {
          alert('Player Two Wins!')
        } else
        if (player2Board.includes('3') && player2Board.includes('5') && player2Board.includes('7')) {
          alert('Player Two Wins!')
        }
        return;

}





// handle the click of a square
let handleClick = function(event) {
  let text = '';
  let currentSquareIndex = event.target.id;
  if (tableObject[currentSquareIndex]) {
    return;
  } else {
    tableObject[currentSquareIndex] = currentPlayer;
    let node = document.createElement("p");
    if (currentPlayer === player1) {
      text = document.createTextNode(`X`);
    } else {
      text = document.createTextNode(`O`);
    }
    node.appendChild(text);
    document.getElementById(event.target.id).appendChild(node);

    console.log(tableObject);
    checkIfWinner();
    changePlayer();
  }
}


// handle the click of the restart button
let restartGame = function() {
  console.log('Restarting Game')
}

// event listeners
squares.forEach(function (square) {
  square.addEventListener("click", handleClick)
});

document.querySelector('.restart').addEventListener("click", restartGame);





