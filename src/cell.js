var Cell = function(x, y, isAlive){
  this.x = x;
  this.y = y;
  this.isAlive = isAlive || false;
  this.coordinates = {"x": x, "y": y};
};

Cell.prototype.getKey = function(){
  return this.x + ":" + this.y;
};
