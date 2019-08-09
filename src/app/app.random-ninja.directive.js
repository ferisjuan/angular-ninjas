const randomNinja = function($scope) {
  return {
    restrict: 'E', //E: element, A: Attribute
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
};

export default ['$scope', randomNinja];
