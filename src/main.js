$(document).ready(function(){

  var initialState = 
  '--------------------,' +
  '------------xx------,' +
  '-----------xx-------,' +
  '----xx----xx--------,' +
  '-----xx-xx---x------,' +
  'x-x---xx-----x------,' +
  'x-x----xx----x------,' +
  'x--xx---------------,' +
  'xxx---xx--xxx-------,' +
  'x-------------------,' +
  'x-------------------,' +
  '-----xx-xx---x------,' +
  '-----xx-xx---x------,' +
  '-----xx-xx---x------,' +
  '-----xx-xx---x------,' +
  '-----xx-xx---x------,' +
  '-----xx-xx---x------,' +
  '-----xx-xx---x------,' ;

  var game = new Game(initialState);

  drawBoard( game.rowCount, game.columnCount);
  paintCells( game.cells );

  setInterval( function(){
    game.iterate();
    paintCells( game.cells );
  }, game.timeout);

});

var paintCells= function(cells){
  cells.forEach( function(cell){
    $( '#row-' + cell.x + '>' +'#column-' + cell.y ).toggleClass( 'alive', cell.isAlive  ); 
  });  
}

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
