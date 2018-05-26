
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


