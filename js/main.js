'use strict';

const MINE = '💣';


var gMinePos;
 var gBoard = {
    minesAroundCount: 4,
    isShown: true,
    isMine: false,
    isMarked: true 
};


debugger;
buildBoard()
function buildBoard() {
  var board = [];
  for (var i = 0; i < 4; i++) {
    board[i] = [];
    for (var j = 0; j < 4; j++) {
      board[i][j] = gBoard;
    }
  }
  board[gMinePos.i][gMinePos.j].gameElement = MINE
  board[2][1] = MINE
  board[0][3] = MINE

  console.table(board);
    return board;

}
