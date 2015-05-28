describe('Cell', function(){
  var testCell; 

  beforeEach(function(){
    testCell = new Cell(0,0); 
  });

  describe('Should initalize', function(){
    it('Cell', function(){
      expect(testCell).toBeDefined();
    });

    it('w/ x-coordinate', function(){
      expect(testCell.x).toBe(0); 
    });

    it('w/ y-coordinate', function(){
      expect(testCell.y).toBe(0); 
    });

    it('w/ coordinate object', function(){
      expect(testCell.coordinates).toEqual({x:0, y:0}); 
    });
  });

  describe('Key Generation', function(){
    it('Should have a key function', function(){
      expect(testCell.getKey).toBeDefined();  
    });

    it('Should have a key as x:y', function(){
      expect(testCell.getKey()).toEqual('0:0'); 
    });
  });
});
