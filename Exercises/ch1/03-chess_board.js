/* **Instructions**
Write a program that creates a string that represents a grid of spaces and "#" characters to a given number of characters for width and height (spaces count as a character) */

//initial solutin 5/23/18

function chessBoard(width, height){
  let board = "";
  for (let i = 0; i < height; i++){
    for (let j = 0; j < width; j++){
      if ((i + j) % 2 == 0){
        board += " ";
      } else { board += "#"}
    } board += "\n";
  } console.log(board);
} 

chessBoard(8, 8)


