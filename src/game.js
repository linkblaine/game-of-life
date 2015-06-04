var Game = function(initialState){
  this.initialState;
  this.cells; 
  this.board;
  this.numberOfIterations;
  this.timeout;
  this.rowCount;
  this.columnCount;

  this.init(initialState);
};

Game.prototype.init = function(initialState){
  this.initialState = initialState || '-----,' +
                                      '--x--,' +
                                      '--x--,' +
                                      '--x--,' +
                                      '-----,' ;
  var input = inputParser.parse( this.initialState ); 
  this.cells = input.cells;
  this.rowCount = input.rowCount;
  this.columnCount = input.columnCount;

  this.board = new Board( this.cells );
  this.numberOfIterations = 100;
  this.timeout = 500;
};

Game.prototype.iterate = function(){
  var cellsToChange =  $.map( this.board.coordinates, function(cell){
    return cell.board.shouldFlipCell( cell ) ? cell : undefined;
  });

  $.each( cellsToChange, function(){
    this.isAlive = !this.isAlive;
  })
};

Game.prototype.toString = function(){
  var str = '';

  for(key in this.board.coordinates){
    str = str + ( this.board.coordinates[key].isAlive ? "x" : "-"); 
  }

  var regex = new RegExp('.{1,' + this.rowCount + '}', "g");
  return str.match(regex).join(',');
};
