var Cell = function(x, y, isAlive){
  this.x = x;
  this.y = y;
  this.isAlive = isAlive || false;
  this.coordinates = {"x": x, "y": y};
  this.board;
};

Cell.prototype.getKey = function(){
  return this.x + ":" + this.y;
};

Cell.prototype.neighborKeys = function(){
  var keys = [];
  for(var i = -1; i <= 1; i++){
    for(var j = -1; j <= 1; j++){
      key = makeKey(this.x, this.y, i, j);
      if( this.getKey() != key){
        keys.push( key );
      }
    } 
  }
  return keys;
};

var makeKey = function(x, y, xOffset, yOffset){
  return (x + xOffset) + ":" + (y+yOffset); 
};
