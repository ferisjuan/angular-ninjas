var myNinjaApp = angular.module('myNinjaApp', ['ngRoute', 'ngAnimate']);

myNinjaApp.config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'NinjaController'
      })
      .when('/directory', {
        templateUrl: 'views/directory.html',
        controller: 'NinjaController'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
      })
      .when('/contact-success', {
        templateUrl: 'views/contact-success.html',
        controller: 'ContactController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);

myNinjaApp.directive('randomNinja', [
  function() {
    return {
      restrict: 'E', //E: element, A: Atribute
      scope: {
        ninjas: '=', // '=' means its binding the data
        title: '='
      },
      templateUrl: 'views/random.html',
      transclude: true,
      controller: function($scope) {
        $scope.random = Math.floor(Math.random() * 4);
      }
    };
  }
]);

myNinjaApp.controller('NinjaController', [
  '$scope',
  '$http',
  function($scope, $http) {
    $http.get('data/ninjas.json').then(function(data) {
      $scope.ninjas = data.data;
    });

    $scope.removeNinja = function(ninja) {
      var removedNinja = $scope.ninjas.indexOf(ninja);

      $scope.ninjas.splice(removedNinja, 1);
    };

    $scope.newNinja = {};

    $scope.addNinja = function(ninja) {
      $scope.ninjas.push(
        // $scope.newNinja
        {
          name: $scope.newNinja.name,
          belt: $scope.newNinja.belt,
          rate: parseInt($scope.newNinja.rate),
          available: true
        }
      );
      $scope.newNinja.name = '';
      $scope.newNinja.belt = '';
      $scope.newNinja.rate = null;
    };

    $scope.removeAll = function() {
      $scope.ninjas = [];
    };
  }
]);

myNinjaApp.controller('ContactController', [
  '$scope',
  '$location',
  function($scope, $location) {
    $scope.sendMessage = function() {
      $location.path('contact-success');
    };
  }
]);
