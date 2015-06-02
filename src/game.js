var Game = function(initialState){
  this.initialState;
  this.cells; 
  this.board;
  this.numberOfIterations;
  this.timeout;
  this.numberOfRows;
  this.numberOfColumns;

  this.init(initialState);
};

Game.prototype.init = function(initialState){
  this.initialState = initialState || '-----,' +
                                      '--x--,' +
                                      '--x--,' +
                                      '--x--,' +
                                      '-----,' ;

  this.cells = inputParser.parse( this.initialState ); 
  this.board = new Board( this.cells );
  this.numberOfIterations = 100;
  this.timeout = 500;
  this.numberOfRows = (this.initialState.match(/,/g) || []).length;
  this.numberOfColumns = this.initialState.split(',')[0].split('').length;
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

  var regex = new RegExp('.{1,' + this.numberOfRows + '}', "g");
  return str.match(regex).join(',');
};
