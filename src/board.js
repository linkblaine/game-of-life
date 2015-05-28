var Board = function(cells){
  this.coordinates = {}; 

  for(var i = 0; i < cells.length; i++){
    cell = cells[i];
    this.coordinates[cell.x + ":" + cell.y] = cell;
  }

};
