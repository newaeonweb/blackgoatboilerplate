function homeRoutes($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.when('/', '/home');

  $stateProvider
    .state('home', {
      url: '/home',
      component: 'home'
    })
}

export default homeRoutes;
