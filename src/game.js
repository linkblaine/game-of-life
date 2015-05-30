var Game = function(){
  this.initialState;
  this.cells; 
  this.board;
  this.numberOfIterations;
  this.timeout;

  this.init();
};

Game.prototype.init = function(){
  this.initialState = '-----,' +
                      '--x--,' +
                      '-xxx-,' +
                      '--x--,' +
                      '-----,' ;
  this.cells = inputParser.parse( this.initialState ); 
  this.board = new Board( this.cells );
  this.numberOfIterations = 100;
  this.timeout = 500;
};
