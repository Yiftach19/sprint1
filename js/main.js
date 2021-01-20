'use strict';

const MINE = '💣';



 var gBoard = {
    minesAroundCount: 4,
    isShown: true,
    isMine: false,
    isMarked: true 
};



buildBoard()
function buildBoard() {
    var board = [];
    for (var i = 0; i < 4; i++) {
        board[i] = [];
        for (var j = 0; j < 4; j++) {
        board[i][j] = gBoard;
        }
    }
    board[2][1] = MINE;
    board[0][3] = MINE;

    console.table(board);
    return board;
}


function renderBoard(board){
    var strHtml = '';
    for( var i = 0; i < board.length; i++){
        for(var j = 0; j < board[0].length; j++){
            var currCell = board[i][j]

        }
    }



}
 