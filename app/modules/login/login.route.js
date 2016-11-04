(function() {
	'use strict';
	angular.module('myapp.login',[]);
	angular.module('myapp.login').config(LoginRouter);

	LoginRouter.$inject = ['$stateProvider'];
	function LoginRouter($stateProvider) {
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'modules/login/login.html',
				controller: 'LoginController',
				controllerAs: 'vm',
				title: 'LOGIN'
			});
	}
})();