var Game = function( params ){
  this.initialState;
  this.cells; 
  this.board;
  this.iterationCount = 0;
  this.timeout;
  this.rowCount;
  this.columnCount;

  this.init(params);
};

Game.prototype.init = function( params ){
  this.initialState = params ? params.initialState :  '-----,' +
                                                      '--x--,' +
                                                      '--x--,' +
                                                      '--x--,' +
                                                      '-----,' ;
  
  var input = inputParser.parse( this.initialState ); 
  this.cells = input.cells;
  this.rowCount = input.rowCount;
  this.columnCount = input.columnCount;

  this.board = new Board( this.cells );
  this.timeout = params ? params.timeout : 100;
};

Game.prototype.iterate = function(){
  var changedCellCount = 0;
  
  this.cells.map(function(cell){
    return cell.board.shouldFlipCell( cell ) ? cell : '';
  }).filter(function(e){ return e}).forEach(function(cell){
    changedCellCount++;
    cell.isAlive = !cell.isAlive;
  });

  this.iterationCount++;
  return changedCellCount;
};

Game.prototype.toString = function(){
  var str = '';
  var regex = new RegExp('.{1,' + this.rowCount + '}', "g");

  this.cells.forEach(function(cell){
    str = str + ( cell.isAlive ? "x" : "-"); 
  });

  return str.match(regex).join(',');
};
