describe('Cell', function(){
  var testCell; 

  beforeEach(function(){
    testCell = new Cell(0,0); 
  });

  
  describe('isAlive', function(){

    it('Should initalize /w false', function(){
      expect(testCell.isAlive).toBeDefined();  
      expect(testCell.isAlive).toBe( false );  
    });

    it('Should able to initalize as true', function(){
      var aliveCell = new Cell(0, 0, true );
      expect( aliveCell.isAlive ).toBe( true ); 
    });
  });

  describe('neighborKeys', function(){
    beforeEach(function(){
      testCell = new Cell(1,1); 
    });
    
    it('Should have a nighborKeys function', function(){
      expect(testCell.neighborKeys()).toBeDefined(); 
    });

    it('Should know the top-left neighbor', function(){
      testKey = makeKey(testCell.x, testCell.y, -1, 1);
      expect(testCell.neighborKeys()).toContain( testKey );
    });

    it('Should know the top-middle neighbor', function(){
      testKey = makeKey(testCell.x, testCell.y, -1, 1);
      expect(testCell.neighborKeys()).toContain( testKey );
    });

    it('Should know the top-right neighbor', function(){
      testKey = makeKey(testCell.x, testCell.y, -1, 1);
      expect(testCell.neighborKeys()).toContain( testKey );
    });
    
    it('Should know the middle-left neighbor', function(){
      testKey = makeKey(testCell.x, testCell.y, -1, 1);
      expect(testCell.neighborKeys()).toContain( testKey );
    });

    it('Should know the middle-right neighbor', function(){
      testKey = makeKey(testCell.x, testCell.y, -1, 1);
      expect(testCell.neighborKeys()).toContain( testKey );
    });

    it('Should know the bottom-left neighbor', function(){
      testKey = makeKey(testCell.x, testCell.y, -1, 1);
      expect(testCell.neighborKeys()).toContain( testKey );
    });

    it('Should know the bottom-middle neighbor', function(){
      testKey = makeKey(testCell.x, testCell.y, -1, 1);
      expect(testCell.neighborKeys()).toContain( testKey );
    });

    it('Should know the bottom-right neighbor', function(){
      testKey = makeKey(testCell.x, testCell.y, -1, 1);
      expect(testCell.neighborKeys()).toContain( testKey );
    });

    it('Should not contain itself', function(){
      testKey = makeKey(testCell.x, testCell.y, 0, 0);
      expect(testCell.neighborKeys()).not.toContain( testKey );
    });
  });
});
