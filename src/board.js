var Board = function(cells){
  this.coordinates = {}; 

  for(var i = 0; i < cells.length; i++){
    cell = cells[i];
    cell.board = this;
    this.coordinates[cell.key] = cell;
  }

};

Board.prototype.getCellStatus = function( cell ){
  var neighbors = cell.neighborKeys();
  var neighborCount = 0;
  for(var i = 0; i < neighbors.length; i++){
    neighborCell = this.coordinates[ neighbors[i] ];
    if(neighborCell && neighborCell.isAlive){
      neighborCount++;
    }
  }

  return this.gameLogic( cell.isAlive, neighborCount);
};

Board.prototype.gameLogic = function( isAlive, neighborCount ){
  return ( isAlive && neighborCount == 2 ) || neighborCount == 3;
};

Board.prototype.shouldFlipCell = function( cell ){
  return this.getCellStatus( cell ) != cell.isAlive;

};
