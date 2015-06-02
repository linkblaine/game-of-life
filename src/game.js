var Game = function(initialState){
  this.initialState;
  this.cells; 
  this.board;
  this.numberOfIterations;
  this.timeout;

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
  this.numberOfColumns = this.initialState.split(',')[0].split('').length - 1;
};

Game.prototype.iterate = function(){
  var self = this;

  var cellsToChange =  $.map( this.board.coordinates, function(cell){
    return this.board.shouldFlipCell( cell ) ? cell : undefined;
  }.bind(self) );

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
