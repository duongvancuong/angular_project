(function() {
	'use strict';

	angular.module('myapp')
		.config(appConfig)
		.run(runApp);

	appConfig.$inject = ['$stateProvider', '$httpProvider', '$urlRouterProvider'];

	function appConfig($stateProvider, $httpProvider, $urlRouterProvider) {
		$httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.useXDomain = true;
    // $httpProvider.responseInterceptors.push('authInterceptor');
    $httpProvider.interceptors.push('authInterceptor');

		$urlRouterProvider.otherwise('/');
		$stateProvider
      .state('index', {
        url: '/',
        templateUrl: './index.html'
      });
	}

	runApp.$inject = ['$rootScope', '$stateParams', '$state', '$localStorage', 'AuthService', '$http'];
	function runApp($rootScope, $stateParams, $state, $localStorage,AuthService, $http) {

		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;

		if ($localStorage.currentUser) {
			$http.defaults.headers.common.Authorization = $localStorage.currentUser.token;
      AuthService.updateCurrentUser($localStorage.currentUser.token, $localStorage.currentUser.username);
		}

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
			console.log('-- State name: ' + toState.name + ' ---');
			if (toState.name === 'login') {
				if (AuthService.isAuthenticated()) {
					console.log('-- Go to Index --');
					$state.go('index');
					console.log('-- Go to Index --');
				}
			} else{
				if (!AuthService.isAuthenticated()) {
					event.preventDefault();
          $state.go('login');
				}
			}
		});

		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, options) {$rootScope.title = toState.title || 'Home';
		});
	}


})();
