describe( 'Game', function(){
  describe( 'Should Initalize', function(){
    var game; 

    beforeEach(function(){
      game = new Game();
    });

    it('w/ initialState', function(){
      expect(game.initialState).toBeDefined(); 
    }); 

    it('w/ board', function(){
      expect(game.board).toBeDefined(); 
    }); 

    it('w/ numberOfIteration', function(){
      expect(game.numberOfIterations).toBeDefined(); 
    }); 

    it('w/ timeout', function(){
      expect(game.timeout).toBeDefined(); 
    }); 
    
  });

  describe( "Game#iterate" , function(){
    beforeEach(function(){
      game = new Game(); 
    }); 

    it('should be defined', function(){
      expect(game.iterate).toBeDefined(); 
    });
  });

});
