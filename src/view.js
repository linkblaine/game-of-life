'use strict'
var View = function( game ){
  this.game = game;
  
  this.pixelHeight = 5; 
  this.pixelWidth  = 5; 
 
  this.canvas = document.getElementById('game-board');
  this.formDiv = document.getElementById('input-container');
  this.boardDiv = document.getElementById('board');
  this.context = this.canvas.getContext('2d');

  this.formDiv.addEventListener("transitionend", function () {
    this.formDiv.className += " hidden";
    this.toggleBoard( true );
    this.resize();
    this.setPixleSize();
  }.bind(this), true);  


};

View.prototype.setPixleSize = function(){
  this.pixelHeight = document.getElementById('board').clientHeight / this.game.rowCount
  this.pixelWidth =  document.getElementById('board').clientWidth / this.game.columnCount
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

View.prototype.resize = function(){
  document.getElementById('board').style.height = window.innerHeight - 30;
  this.canvas.height = window.innerHeight - 30; 
  this.canvas.width  = document.getElementById('board').clientWidth; 
}

View.prototype.updateIterationCount = function( count ){
  document.getElementById('itr-count').innerText = count;
};

View.prototype.toggleBoard = function(makeVisible){
  if(makeVisible){
    this.boardDiv.className -= "invisible";
    this.boardDiv.className -= "hidden";
  }else{
    this.boardDiv.className += " invisible";
  }
};

View.prototype.toggleInput = function(makeVisible){
  if(makeVisible){
    this.formDiv.className -= "invisible";
    this.formDiv.className -= "hidden";
  }else{
    this.formDiv.className += " invisible";
  }
};
