let squares = document.querySelectorAll ("td");
let tableObject = {};
const player1 = 'X';
const player2 = 'O';
let currentPlayer = player1;

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
  }
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





