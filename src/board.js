'use strict'

var Board = function(cells){
  this.coordinates = {}; 

  cells.forEach(function(cell){
    cell.board = this;
    this.coordinates[cell.key] = cell;
  }.bind(this)); 
 
  cells.forEach(this.assignNeighborCells.bind(this));
};

Board.prototype.assignNeighborCells = function( cell ){
  var self = this;
  var keys = cell.neighborKeys();
  
  keys.forEach(function(key){
    cell.neighbors.push( this.coordinates[key] );
  }.bind(self));

  cell.neighbors = cell.neighbors.filter(function(item){ return item != undefined});
}

//TODO: Remove this method call. 
Board.prototype.getCellStatus = function( cell ){
  return this.gameLogic(cell.isAlive, cell.aliveNeighborCount() );
};

Board.prototype.gameLogic = function( isAlive, neighborCount ){
  return ( isAlive && neighborCount == 2 ) || neighborCount == 3;
};

Board.prototype.shouldFlipCell = function( cell ){
  return this.getCellStatus( cell ) != cell.isAlive;
};
