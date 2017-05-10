export default ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $locationProvider) => {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl',
      controllerAs: 'hc'
    })
    .state('test', {
      url: '/test',
      templateUrl: 'templates/test.html',
      controller: 'TestCtrl',
      controllerAs: 'tc'
    })

  $urlMatcherFactoryProvider.caseInsensitive(true)
  $urlRouterProvider.otherwise('/home')
  // $locationProvider.html5Mode(true)
}]
