var Game = function(initialState){
  this.initialState;
  this.cells; 
  this.board;
  this.iterationCount;
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
  this.timeout = 100;
};

Game.prototype.iterate = function(){
  this.cells.map(function(cell){
    return cell.board.shouldFlipCell( cell ) && cell;
  }).forEach(function(cell){
    cell.isAlive = !cell.isAlive;
  });
};

Game.prototype.toString = function(){
  var str = '';
  var regex = new RegExp('.{1,' + this.rowCount + '}', "g");

  this.cells.forEach(function(cell){
    str = str + ( cell.isAlive ? "x" : "-"); 
  });

  return str.match(regex).join(',');
};
