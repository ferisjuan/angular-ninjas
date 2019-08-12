export default function() {
  return {
    restrict: 'E', //E: element, A: Attribute
    scope: {
      ninjas: '=', // '=' means its binding the data
      title: '='
    },
    templateUrl: '../views/random.html',
    transclude: true,
    controller: [
      '$scope',
      function($scope) {
        $scope.random = Math.floor(Math.random() * 4);
      }
    ]
  };
}
