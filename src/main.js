document.addEventListener('DOMContentLoaded',function(){

  document.getElementById('settings').addEventListener('submit', function(event){
    event.preventDefault();
    var target = event.target;
     
    var init = BoardGenerator.generate( target.columnCount.value, target.rowCount.value);
    var params = {initialState: init, timeout: target.timeout.value}
    
    var game = new Game(params);
    var view = new View(game);

    var interval = setInterval( function(){
      game.iterate() ?  true : clearInterval( interval );
      view.paintCells();
    }, game.timeout);
  });
});


