describe('Game', function() {
  describe('GameManager', function() {
    // Inject the Game module into this test
    beforeEach(module('Game'));

    var gameManager, _gridService, $rootScope;

    beforeEach(module(function($provide) {
      _gridService = {
        anyCellsAvailable: angular.noop,
        tileMatchesAvailable: angular.noop,
      };

      // Switch out the real GridService with
      // fake version
      $provide.value('GridService', _gridService);
      provide = $provide;
    }));

    beforeEach(inject(function(GameManager, _$rootScope_) {
      gameManager = GameManager;
      rootScope = _$rootScope_;
    }));

    describe('.movesAvailable', function() {
      it('should report true if there are cells available', function() {
        spyOn(_gridService, 'anyCellsAvailable').andReturn(true);
        expect(gameManager.movesAvailable()).toBeTruthy();
      });

      it('should report true if there are matches available', function() {
        spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
        spyOn(_gridService, 'tileMatchesAvailable').andReturn(true);
        expect(gameManager.movesAvailable()).toBeTruthy();
      });

      it('should report false if there are no cells nor matches available', function() {
        spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
        spyOn(_gridService, 'tileMatchesAvailable').andReturn(false);
        expect(gameManager.movesAvailable()).toBeFalsy();
      });
    });

  });
});
