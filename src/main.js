$(document).ready(function(){

  var init = 
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

  var params = {initialState: init, timeout: 100}
  var game = new Game(params);
  var view = new View(game);

  setInterval( function(){
    game.iterate();
    view.paintCells();
    view.updateIterationCount( game.iterationCount );
  }, game.timeout);

});

