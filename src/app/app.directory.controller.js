export default [
  '$scope',
  '$http',
  function($scope, $http) {
    $http.get('../data/ninjas.json').then(function(data) {
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
];
