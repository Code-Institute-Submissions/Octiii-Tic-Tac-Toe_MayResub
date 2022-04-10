//Declares variables to be used trought the code.
//Defines an aray that has another 3 arays inside of it, this simulates a board in JS.
var board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]
var playerO = "O";
var palyerX = "X";
var currPlayer = playerO;
var gameOver = false;

//A round reset function as to not have to refresh the page to play again.

//function resetGame(){
//  let boardchildren = document.querySelector("#board").childNodes
//  for (var i = 0; i<boardchildren.length; i++)
//    boardchildren[i].innerText = ""
//  setGame
//}


//Defines the function of setgame.
function setGame() {

  for (let r = 0; r < 3 ; r++){
    for(let c = 0; c < 3; c++){
//Draws the board by creating 9 div elements inside the board element.
      let tile = document.createElement("div");
      //Asings each div the id of the values of r and c with a - inbetween.
      tile.id = r.toString() + "-" + c.toString();
      //Aplies CSS stialing to the newley created divs.
      tile.classList.add("tile");
      if (r == 0 || r == 1) {
        tile.classList.add("horizontal-line");
      }
      if (c == 0 || c == 1) {
        tile.classList.add("vertical-line");
      }
      //Adds a listner event fo the tiles, and excute the set Tile function.
      tile.addEventListener("click", setTile);
      
      //Adds the divs to the board div.
      document.getElementById("board").append(tile);
    }
  }
}
//Defines the setTile function.
function setTile() {
  //Checks to see if gameOver variable is true and dose not run the function if it is.
  if(gameOver) {
    return;
  }
//Feeds the coordenates of the board in the JS arrays and creates and array.
  let coords = this.id.split("-") //"1-1" -> ["1","1"]
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);
//Dose not allow a tile to be cliked twice.
  if (board [r][c] != ' ') {
    return;
  }
//Edits the div that is being cliked and adds the simbol coresponding to the player.
  board[r][c] = currPlayer;
  this.innerText = currPlayer;
//Alternates betwenn players.
  if (currPlayer == playerO) {
    currPlayer = palyerX;
  }
  else {
    currPlayer = playerO;
  }

  checkWinner();
}
//Defines the function that cheks for the winner.
function checkWinner() {
//Checks the board for a winning condition horizontaly, cheks for an empty space and applyes the winner style.
  for (let r = 0; r < 3; r++){
    if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ' ') {
      for (let i = 0; i < 3; i++){
        let tile = document.getElementById(r.toString() + "-" + i.toString());
        tile.classList.add("winner");
      }
        gameOver = true; 
        return;
    }
  }
//Checks the board for a winning condition verticaly, cheks for an empty space and applyes the winner style.
  for (let c = 0; c < 3; c++) {
    if (board[0][c] == board[1][c] && board[1][c] ==  board[2][c] && board[0][c] != ' ') {
      for (let i = 0; i < 3; i++) {
      let tile = document.getElementById(i.toString() + "-" + c.toString());                
        tile.classList.add("winner");
      }
      gameOver = true;
      return;
    }
  }
//Checks the board for a winning condition diagonaly, cheks for an empty space and applyes the winner style.
  if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
    for (let i = 0; i < 3; i++) {
      let tile = document.getElementById(i.toString() + "-" + i.toString());
      tile.classList.add("winner");
    }
    gameOver = true;
    return;
  }
//Checks the board for a winning condition anty-diagonaly, cheks for an empty space and applyes the winner style.
  if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') {
    let tile = document.getElementById("0-2");
    tile.classList.add("winner");

    tile = document.getElementById("1-1");
    tile.classList.add("winner");

    tile = document.getElementById("2-0");
    tile.classList.add("winner");

    gameOver = true;
    return;
  }
}
//Calls the function to set the game on loading the game.
window.onload = function() {
  //document.querySelector("#reset").addEventListener("click", resetGame)
  setGame();
}
