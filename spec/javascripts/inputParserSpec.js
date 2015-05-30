describe('inputParser', function(){
  var gameInput;
  
  beforeEach(function(){
    gameInput = '---,-x-,---';
  });

  it('should have parse function', function(){
    expect(inputParser.parse).toBeDefined();
  });

  it('should return a collection of cells', function(){
    expect(inputParser.parse(gameInput)).toContain(new Cell(0,0));
    expect(inputParser.parse(gameInput)).toContain(new Cell(0,1));
    expect(inputParser.parse(gameInput)).toContain(new Cell(0,2));
    expect(inputParser.parse(gameInput)).toContain(new Cell(1,0));
    expect(inputParser.parse(gameInput)).toContain(new Cell(1,1, true));
    expect(inputParser.parse(gameInput)).toContain(new Cell(1,2));
    expect(inputParser.parse(gameInput)).toContain(new Cell(2,0));
    expect(inputParser.parse(gameInput)).toContain(new Cell(2,1));
    expect(inputParser.parse(gameInput)).toContain(new Cell(2,2));
  });
});
