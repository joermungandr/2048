'use strict';

/**
 * @ngdoc overview
 * @name twentyfourtyeightApp
 * @description
 * # twentyfourtyeightApp
 *
 * Main module of the application.
 */
angular
  .module('twentyfourtyeightApp', ['Game'])
  .controller('GameController', function(GameManager) {
    this.game = GameManager;
  });
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
