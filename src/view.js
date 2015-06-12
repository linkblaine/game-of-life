'use strict'

var View = function( game ){
  this.game = game;
  
  this.pixelHeight = 0;
  this.pixelWidth  = 0; 
  this.canvas = document.getElementById('game-board');
  this.formDiv = document.getElementById('input-container');
  this.boardDiv = document.getElementById('board');
  this.cellDiv  = document.getElementById('cell');

  this.context = this.canvas.getContext('2d');

  this.formDiv.addEventListener("transitionend", this.initalizeBoard.bind(this), true);  
  this.toggleElement(this.formDiv, false );
};

View.prototype.initalizeBoard = function(){
  //todo: do i need this? I don't think so...:
  this.toggleElement(this.formDiv, false );
  this.toggleElement(this.boardDiv, true );
  this.resize();
  this.setPixleSize();
};

View.prototype.setPixleSize = function(){
  this.pixelHeight = this.boardDiv.clientHeight / this.game.rowCount
  this.pixelWidth =  this.boardDiv.clientWidth / this.game.columnCount
};

View.prototype.paintCells = function(){
  var self = this;

  var bgColor = getComputedStyle( this.cellDiv ).getPropertyValue('background-color');
  
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
  this.boardDiv.style.height = window.innerHeight - 30;
  this.canvas.height = window.innerHeight - 30; 
  this.canvas.width  = this.boardDiv.clientWidth; 
}

//I know I don't do anything with this but I want to. 
View.prototype.updateIterationCount = function( count ){
  document.getElementById('itr-count').innerText = count;
};

View.prototype.toggleElement = function(element, makeVisible){
  if(makeVisible){
    element.className -= "invisible";
    element.className -= "hidden";
  }else{
    element.className += " invisible";
  }
};

