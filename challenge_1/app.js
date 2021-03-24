let squares = document.querySelectorAll ("td");
let counter = 0;
squares.forEach(function (square) {
  square.addEventListener("click", function() {
    let node = document.createElement("p");
    if (counter%2 === 1) {
      let text = document.createTextNode("X");
      node.appendChild(text);
    } else {
      let text = document.createTextNode("0");
      node.appendChild(text);
    }
    if (!square.hasChildNodes()) {
    square.appendChild(node);
    counter++;
    }
    console.log("Square Clicked");
  })
})











//   let isClicked = false;
//   let playerOneClicked = false;
//   let playerTwoClicked = false;

//   handleClickOne = function()  {
//     const body = document.body;
//     const square1 = document.getElementById("squareOne");
//     if (!square1.hasChildNodes()) {
//       isClicked = true;
//       var node = document.createElement("p");
//       if (isClicked) {
//       var text = document.createTextNode("X");
//       playerOneClicked = true;
//       } else {
//         var text = document.createTextNode("O");
//         playerTwoClicked = true;
//       }
//       node.appendChild(text);
//       document.getElementById("squareOne").appendChild(node);
//    }
// }


// var handleClickTwo = function() {
//   const body = document.body;
//   const square2 = document.getElementById("squareTwo");
//   if (!square2.hasChildNodes()) {

//     isClicked = true;
//   var node = document.createElement("p");
//   if (isClicked) {
//     var text = document.createTextNode("X");
//     } else {
//       var text = document.createTextNode("O");
//     }  node.appendChild(text);
//   document.getElementById("squareTwo").appendChild(node);
//   }
// }

// var handleClickThree = function() {
//   const body = document.body;
//   const square3 = document.getElementById("squareThree");
//   if (!square3.hasChildNodes()) {
//     isClicked= true;
//     var node = document.createElement("p");
//     if (isClicked) {
//     var text = document.createTextNode("X");
//     } else {
//       var text = document.createTextNode("O");
//     }  node.appendChild(text);
//   document.getElementById("squareThree").appendChild(node);
//   }
// }

// var handleClickFour = function() {
//   const body = document.body;
//   const square4 = document.getElementById("squareFour");
//   if (!square4.hasChildNodes()) {
//     isClicked= true;
//   var node = document.createElement("p");
//   if (isClicked) {
//     var text = document.createTextNode("X");
//     } else {
//       var text = document.createTextNode("O");
//     }  node.appendChild(text);
//   document.getElementById("squareFour").appendChild(node);
//   }
// }

// var handleClickFive = function() {
//   const body = document.body;
//   const square5 = document.getElementById("squareFive");
//   if (!square5.hasChildNodes()) {

//   numClicks++;
//   var node = document.createElement("p");
//   if (numClicks % 2 === 1) {
//     var text = document.createTextNode("X");
//     } else {
//       var text = document.createTextNode("O");
//     }  node.appendChild(text);
//   document.getElementById("squareFive").appendChild(node);
//   } else {
//     numClicks--;
//   }
// }

// var handleClickSix = function() {
//   const body = document.body;
//   const square6 = document.getElementById("squareSix");
//   if (!square6.hasChildNodes()) {

//   numClicks++;
//   var node = document.createElement("p");
//   if (numClicks % 2 === 1) {
//     var text = document.createTextNode("X");
//     } else {
//       var text = document.createTextNode("O");
//     }  node.appendChild(text);
//   document.getElementById("squareSix").appendChild(node);
//   } else {
//     numClicks--;
//   }
// }

// var handleClickSeven = function() {
//   const body = document.body;
//   const square7 = document.getElementById("squareSeven");
//   if (!square7.hasChildNodes()) {

//   numClicks++;
//   var node = document.createElement("p");
//   if (numClicks % 2 === 1) {
//     var text = document.createTextNode("X");
//     } else {
//       var text = document.createTextNode("O");
//     }  node.appendChild(text);
//   document.getElementById("squareSeven").appendChild(node);
//   } else {
//     numClicks--;
//   }
// }

// var handleClickEight = function() {
//   const body = document.body;
//   const square8 = document.getElementById("squareEight");
//   if (!square8.hasChildNodes()) {

//   numClicks++;
//   var node = document.createElement("p");
//   if (numClicks % 2 === 1) {
//     var text = document.createTextNode("X");
//     } else {
//       var text = document.createTextNode("O");
//     }  node.appendChild(text);
//   document.getElementById("squareEight").appendChild(node);
//   } else {
//     numClicks--;
//   }
// }

// var handleClickNine = function() {
//   const body = document.body;
//   const square9 = document.getElementById("squareNine");
//   if (!square9.hasChildNodes()) {

//   numClicks++;
//   var node = document.createElement("p");
//   if (numClicks % 2 === 1) {
//     var text = document.createTextNode("X");
//     } else {
//       var text = document.createTextNode("O");
//     }  node.appendChild(text);
//   document.getElementById("squareNine").appendChild(node);
//   } else {
//     numClicks--;
//   }
// }

