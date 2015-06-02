var Board = function(cells){
  this.coordinates = {}; 

  for(var i = 0; i < cells.length; i++){
    cell = cells[i];
    this.coordinates[cell.getKey()] = cell;
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
  
  var cellStatus = false; 

  switch( neighborCount )
  {
    case 2:
      cellStatus = isAlive;
      break;
    case 3:
      cellStatus = true; 
      break;
    default:
      cellStatus = false;
      break;
  }

  return cellStatus;
};

Board.prototype.shouldFlipCell = function( cell ){
  return this.getCellStatus( cell ) != cell.isAlive;

};
