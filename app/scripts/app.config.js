(function() {
	'use strict';

	angular.module('myapp')
		.config(appConfig)
		.run(runApp);

	appConfig.$inject = ['$stateProvider', '$httpProvider', '$urlRouterProvider'];

	function appConfig($stateProvider, $httpProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('index', {
				url: '/',
				templateUrl: 'scripts/CRUD-API/views/movie.html',
				controller: 'MovieListController'
			})
			.state('page', {
				url: '/page',
				templateUrl: 'scripts/CRUD-API/views/movie.html',
				controller: 'MovieListController'
			});
	}

	runApp.$inject = ['$rootScope', '$stateParams', '$state'];
	function runApp($rootScope, $stateParams, $state) {

		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;

		$rootScope.$on('$stateChangeStart', function(event, toState) {

		});

		$rootScope.$on('$stateChangeSuccess', function(event, toState) {
			$rootScope.title = toState.title || 'Home';
		});
	}


})();