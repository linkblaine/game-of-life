var Game = function( params ){
  this.initialState;
  this.cells; 
  this.board;
  this.iterationCount;
  this.timeout;
  this.rowCount;
  this.columnCount;

  this.init(params);
};

Game.prototype.init = function( params ){
  this.initialState = params.initialState ||  '-----,' +
                                              '--x--,' +
                                              '--x--,' +
                                              '--x--,' +
                                              '-----,' ;
  
  var input = inputParser.parse( this.initialState ); 
  this.cells = input.cells;
  this.rowCount = input.rowCount;
  this.columnCount = input.columnCount;

  this.board = new Board( this.cells );
  this.timeout = params.timeout;
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
