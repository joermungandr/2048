angular.module('Game', [])
  .service('GameManager', function() {
    // Create a new game
    this.newGame = function() {};
    // Handle the move action
    this.move = function() {};
    // Update the score
    this.updateScore = function(newScore) {};
    // Moves left?
    this.movesAvailable = function() {};
  });
