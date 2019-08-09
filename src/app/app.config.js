export default function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'DirectoryController'
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'DirectoryController'
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
