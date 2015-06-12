var Cell = function(x, y, isAlive){
  this.x = x;
  this.y = y;
  this.isAlive = isAlive || false;
  this.neighbors = [];
  this.board;
  this.key = this.x + ":" + this.y;
};

Cell.prototype.neighborKeys = function(){
  var keys = [];
  for(var i = -1; i <= 1; i++){
    for(var j = -1; j <= 1; j++){
      key = makeKey(this.x, this.y, i, j);
      keys.push( key );
    } 
  }
  keys.splice( keys.indexOf( this.key ), 1 );
  return keys;
};

Cell.prototype.aliveNeighborCount = function(){
  return this.neighbors.filter(function( neighborCell ){
    return neighborCell.isAlive; 
  }).length; 
};

var makeKey = function(x, y, xOffset, yOffset){
  return (x + xOffset) + ":" + (y+yOffset); 
};

