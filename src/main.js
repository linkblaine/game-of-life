$(document).ready(function(){

  var init = 
  '--------------------,' +
  '---xxxx-----xx--x---,' +
  '------xx---xx--x----,' +
  '----xx---xxx--x-x---,' +
  '-----xx-xx---x------,' +
  'x-x---xx-----x------,' +
  'x-x----xx----x-xx---,' +
  'x--xx----------xxx--,' +
  'xxx---xx--xxx--x----,' +
  'x---xxx-----xx--xx--,' +
  'x--------xxx--------,' +
  '-----xx-xx---x------,' +
  '--x--xx-xx---x--xx--,' +
  '--x--x-----x-xxx---x,' +
  '--xx-xxxxx---xxx----,' +
  '--x--xx-xx---xxx----,' +
  '--x--xx-xx---x------,' +
  '---xxxx-xx--xx------,' ;

  var params = {initialState: init, timeout: 100}
  var game = new Game(params);
  var view = new View(game);
  var changedCellsCache = [];

  var interval = setInterval( function(){
    game.iterate() ? true : clearInterval( interval );
    view.paintCells();
    view.updateIterationCount( game.iterationCount );
  }, game.timeout);
});

