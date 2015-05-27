describe('Cell', function(){
  var testCell; 

  beforeEach(function(){
    testCell = new Cell(0,0); 
  });

  it('should exists', function(){
    expect(testCell).toBeDefined();
  });

  it('should be initalized w/ x-coordinate', function(){
    expect(testCell.x).toBe(0); 
  });

  it('should be initalized w/ y-coordinate', function(){
    expect(testCell.y).toBe(0); 
  });

  it('should be initalized w/ coordinate object', function(){
    expect(testCell.coordinates).toEqual({x:0, y:0}); 
  });

});
