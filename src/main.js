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

  var interval = setInterval( function(){
    var numCellsChanged = game.iterate();
    view.paintCells();
    view.updateIterationCount( game.iterationCount );
    numCellsChanged  == 0 ? clearInterval( interval ) : false;
  }, game.timeout);
});

