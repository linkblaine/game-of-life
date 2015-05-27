var inputParser = function(){
  var parse = function(input){
    var rawBoard = input;               
    var rows = rawBoard.split(',');
    var cells = [];
    for(var i=0; i<rows.length; i++){
      var columns = rows[i].split('');
      for(var j=0; j<columns.length; j++){
        cells.push( new Cell(i,j) );
      }
    }
    return cells; 
  };
  return {parse: parse};
}();
