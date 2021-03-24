let squares = document.querySelectorAll ("td");
let counter = 0;
let tableObject = {};
const player1 = 'X';
const player2 = 'O';
let currentPlayer = player1;

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

let checkIfWinner = function() {
  console.log('Checking if Winner...')
}

let handleClick = function(event) {
  console.log(event.target);
  let currentSquareIndex = event.target.id;
  if (tableObject[currentSquareIndex]) {
    return;
  } else {
    tableObject[currentSquareIndex] = currentPlayer;
    console.log(tableObject);
    checkIfWinner();
    changePlayer();
  }
}



let restartGame = function() {
  console.log('Restarting Game')
}




squares.forEach(function (square) {
  square.addEventListener("click", handleClick)
});

document.querySelector('.restart').addEventListener("click", restartGame);
    // let node = document.createElement("p");
    // if (counter%2 === 0) {
    //   let text = document.createTextNode("X");
    //   node.appendChild(text);
    // } else {
    //   let text = document.createTextNode("0");
    //   node.appendChild(text);
    // }
    // if (!square.hasChildNodes()) {
    // square.appendChild(node);
    // console.log(square);
    // tableArray.push(square);
    // console.log(tableArray);
    // counter++;
    // }
    // console.log("Square Clicked");
    // if (tableArray.length === 9) {
    //   alert('Cat\'s Game!')
    //   return;
    // } else {
    //   console.log('Checking if winner...')
    // }




