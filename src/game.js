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
};

Game.prototype.iterate = function(){
  var self = this;
  var cellsToChange = [];

  for( key in this.board.coordinates){ 
    var curCell = this.board.coordinates[key]; 
    var newCellStatus = this.board.getCellStatus( curCell );
    if(newCellStatus != curCell.isAlive){
      cellsToChange.push( curCell.getKey() );
    }
  }

  for( key in cellsToChange ){
    var cellStatus = this.board.coordinates[ cellsToChange[key] ].isAlive;
    this.board.coordinates[ cellsToChange[key] ].isAlive = !cellStatus;
  }

};

Game.prototype.toString = function(){
  var str = '';
  for(key in this.board.coordinates){
    str = str + ( this.board.coordinates[key].isAlive ? "x" : "-"); 
  }

  var regex = new RegExp('.{1,' + this.numberOfRows + '}', "g");
  return str.match(regex).join(',');
};
