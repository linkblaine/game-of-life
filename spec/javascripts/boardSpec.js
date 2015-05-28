describe('Board', function(){
  var testBoard;
  var gameInput;
 
  beforeEach(function(){
    gameInput = "---,-x-,---";
    testBoard = new Board( inputParser.parse( gameInput ) );
  });

  describe('Should Initalize', function(){ 
    it('Board', function(){
      expect(testBoard).toBeDefined(); 
    });

    it('Board w/ coordinates', function(){
      expect(testBoard.coordinates).toBeDefined(); 
    });

    it('Board w/ the correct number of coordinates', function(){
      coordCount = Object.keys(testBoard.coordinates).length;
      expect(coordCount).toEqual(9); 
    });
  });
});
