document.addEventListener('DOMContentLoaded',function(){

  var init = BoardGenerator.generate( 100, 100 );
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

