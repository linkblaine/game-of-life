describe('Board', function(){
  var testBoard;
  var gameInput;
  
  beforeEach(function(){
    gameInput = "---,-x-,---";
    testBoard = new Board(gameInput);
  });

  it('Should initalize a board w/ coordinates', function(){
    expect(testBoard).toBeDefined(); 
  });
});
