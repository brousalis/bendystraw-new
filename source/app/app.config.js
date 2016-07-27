(function() {
  angular
    .module('app')
    .config(routeConfig)
    .config(urlHashConfig)

  function routeConfig($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/app.html',
        controller: 'AppController'
      });
    $urlRouterProvider.otherwise('/');
  }

  function urlHashConfig($locationProvider) {
    $locationProvider.html5Mode({ enabled: true, rewriteLinks: false }).hashPrefix('!');
  }
}());
