const ContactController = function($scope, $location) {
  $scope.sendMessage = function() {
    $location.path('contact-success');
  };
};

export default ['$scope', '$location', ContactController];
