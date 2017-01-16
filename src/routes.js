export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('suggestions', {
      url: '/suggestions',
      component: 'suggestionsList'
    })
    .state('login', {
      url: '/',
      component: 'login'
    })
;
}
