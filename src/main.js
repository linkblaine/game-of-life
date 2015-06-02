$(document).ready(function(){

  var game = new Game();
  drawBoard( game.numberOfRows, game.numberOfColumns);
  for( var i = 0; i < game.numberOfIterations; i++){
    game.iterate();
  }
});

var drawBoard = function( rows, columns){
  
  for(var i = 0; i < rows; i++){
    var rowId = 'row-' + i;
      $('#game-board').append("<tr id="+ rowId +" class='row'></tr>");

    for(var j = 0; j < columns; j++){
      var columnId = 'column-' + j;
      $('#'+rowId).append("<td id=" +columnId +" class='column'></td>");
    }
  }
  
}
