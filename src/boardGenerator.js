var BoardGenerator = function(){

  var generate = function( rows, columns ){
    var board= '';
    for(var i=0; i < rows; i++){
      for(var j=0; j < columns; j++){
        board += ((( Math.floor( Math.random() * 10 ) + 1) % 2) ? 'x' : '-' );
      } 
      board += ',';
    }  
    return board; 
  };
  return {generate: generate}
}();
