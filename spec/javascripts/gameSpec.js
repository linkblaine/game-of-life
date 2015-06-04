describe( 'Game', function(){
  describe( "Game#iterate" , function(){
    beforeEach(function(){
      game = new Game(); 
    }); 

    it('should be defined', function(){
      expect(game.iterate).toBeDefined(); 
    });

    it('should update board coordinates', function(){
      game.iterate();
      expect(game.toString()).toEqual('-----,-----,-xxx-,-----,-----');
    });
    it('should increase the iterationCount', function(){
      game.iterate();
      expect(game.iterationCount).toEqual(1); 
    });
  });

});
