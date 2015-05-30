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

  describe('getCellStatus', function(){
    it('Should kill a cell if neighbors < 2', function(){
      gameInput = "x--,-x-,---";
      testBoard = new Board( inputParser.parse( gameInput ) );
      var testCell = testBoard.coordinates["1:1"];
      expect( testBoard.getCellStatus( testCell ) ).toBe( false );
    });

    it('Should kill a cell if neighbors > 3', function(){
      gameInput = "xx-,-x-,-xx";
      testBoard = new Board( inputParser.parse( gameInput ) );
      var testCell = testBoard.coordinates["1:1"];
      expect( testBoard.getCellStatus( testCell ) ).toBe( false );
    }); 

    it('Should persist a cell if neighbors are 2', function(){
      gameInput = "x--,-x-,--x";
      testBoard = new Board( inputParser.parse( gameInput ) );
      var testCell = testBoard.coordinates["1:1"];
      expect( testBoard.getCellStatus( testCell ) ).toBe( true );
    });

    it('Should persist a cell if neighbors are 3', function(){
      gameInput = "x--,-x-,-xx";
      testBoard = new Board( inputParser.parse( gameInput ) );
      var testCell = testBoard.coordinates["1:1"];
      expect( testBoard.getCellStatus( testCell ) ).toBe( true );
    });

    it('Should live if alive neighbors = 3', function(){
      gameInput = "x-x,---,--x";
      testBoard = new Board( inputParser.parse( gameInput ) );
      var testCell = testBoard.coordinates["1:1"];
      expect( testBoard.getCellStatus( testCell ) ).toBe( true );
    });
  });

  describe('gameLogic', function(){
    describe('is Alive', function(){
      it('isAlive = true, neighborCount = 0', function(){
        expect(testBoard.gameLogic(true,0)).toBe(false);
      });
      
      it('isAlive = true, neighborCount = 1', function(){
        expect(testBoard.gameLogic(true,1)).toBe(false);
      });
      
      it('isAlive = true, neighborCount = 2', function(){
        expect(testBoard.gameLogic(true,2)).toBe(true);
      });
      
      it('isAlive = true, neighborCount = 3', function(){
        expect(testBoard.gameLogic(true,3)).toBe(true);
      });

      it('isAlive = true, neighborCount = 4', function(){
        expect(testBoard.gameLogic(true,4)).toBe(false);
      });

      it('isAlive = true, neighborCount = 5', function(){
        expect(testBoard.gameLogic(true,5)).toBe(false);
      });

      it('isAlive = true, neighborCount = 6', function(){
        expect(testBoard.gameLogic(true,6)).toBe(false);
      });

      it('isAlive = true, neighborCount = 7', function(){
        expect(testBoard.gameLogic(true,7)).toBe(false);
      });
      
      it('isAlive = true, neighborCount = 8', function(){
        expect(testBoard.gameLogic(true,8)).toBe(false);
      });
    });
    
    describe('is Dead', function(){
      it('isAlive = false, neighborCount = 0', function(){
        expect(testBoard.gameLogic(false,0)).toBe(false);
      });
      
      it('isAlive = false, neighborCount = 1', function(){
        expect(testBoard.gameLogic(false,1)).toBe(false);
      });
      
      it('isAlive = false, neighborCount = 2', function(){
        expect(testBoard.gameLogic(false,2)).toBe(false);
      });
      
      it('isAlive = false, neighborCount = 3', function(){
        expect(testBoard.gameLogic(false,3)).toBe(true);
      });

      it('isAlive = false, neighborCount = 4', function(){
        expect(testBoard.gameLogic(false,4)).toBe(false);
      });

      it('isAlive = false, neighborCount = 5', function(){
        expect(testBoard.gameLogic(false,5)).toBe(false);
      });

      it('isAlive = false, neighborCount = 6', function(){
        expect(testBoard.gameLogic(false,6)).toBe(false);
      });

      it('isAlive = false, neighborCount = 7', function(){
        expect(testBoard.gameLogic(false,7)).toBe(false);
      });
      
      it('isAlive = false, neighborCount = 8', function(){
        expect(testBoard.gameLogic(false,8)).toBe(false);
      });
    });
  });
});
