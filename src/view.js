'use strict'
var View = function( game ){
  this.game = game;
  this.pixelHeight = 5; 
  this.pixelWidth  = 5; 
  this.canvas = document.getElementById('game-board');
  this.context = this.canvas.getContext('2d');

  this.resize( this.game.columnCount * this.pixelWidth, 
               this.game.rowCount * this.pixelHeight);

  this.paintCells();
};

View.prototype.paintCells = function(){
  var self = this; 
  var cell= document.getElementById('cell');
  var bgColor = getComputedStyle( cell ).getPropertyValue('background-color');

  this.clear();
  this.context.beginPath();
  this.context.fillStyle = bgColor;

  this.game.cells.forEach( function(cell){
    if( cell.isAlive ){
      this.context.fillRect( cell.x * this.pixelWidth, 
                             cell.y * this.pixelHeight, 
                             this.pixelWidth, 
                             this.pixelHeight);
    }}.bind(self));  
};

View.prototype.clear = function(){
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

View.prototype.resize = function(height, width){
  this.canvas.height = height; 
  this.canvas.width  = width; 
}

View.prototype.updateIterationCount = function( count ){
  document.getElementById('itr-count').innerText = count;
};
