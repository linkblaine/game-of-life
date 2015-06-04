var View = function( game ){
  this.game = game;
  this.drawBoard();
  this.paintCells();
};

View.prototype.paintCells = function(){
  this.game.cells.forEach( function(cell){
    $( '#row-' + cell.x + '>' +'#column-' + cell.y ).toggleClass( 'alive', cell.isAlive  ); 
  });  
};

View.prototype.drawBoard = function(){
  for(var i = 0; i < this.game.rowCount; i++){
    var rowId = 'row-' + i;
    $('#game-board').append("<tr id="+ rowId +" class='row'></tr>");
    for(var j = 0; j < this.game.columnCount; j++){
      var columnId = 'column-' + j;
      $('#'+rowId).append("<td id=" +columnId +" class='column'></td>");
    }
  }
};

View.prototype.updateIterationCount = function( count ){
  $('#itr-count').text( count );
};
