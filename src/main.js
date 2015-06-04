$(document).ready(function(){

  var initialState = 
  '--------------------,' +
  '------------xx------,' +
  '-----------xx-------,' +
  '----xx----xx--------,' +
  '-----xx-xx---x------,' +
  'x-x---xx-----x------,' +
  'x-x----xx----x------,' +
  'x--xx---------------,' +
  'xxx---xx--xxx-------,' +
  'x-------------------,' +
  'x-------------------,' +
  '-----xx-xx---x------,' +
  '-----xx-xx---x------,' +
  '-----xx-xx---x------,' +
  '-----xx-xx---x------,' +
  '-----xx-xx---x------,' +
  '-----xx-xx---x------,' +
  '-----xx-xx---x------,' ;

  var game = new Game(initialState);
  var view = new View(game);

  setInterval( function(){
    game.iterate();
    view.paintCells();
  }, game.timeout);

});

