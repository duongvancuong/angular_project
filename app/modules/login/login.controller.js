(function() {
	'use strict';
	angular.module('myapp.login')
		.controller('LoginController',LoginController);

	LoginController.$inject = ['$state', '$http', '$localStorage', '$q', 'AuthService'];
	function LoginController($state, $http, $localStorage, $q, AuthService) {
		var vm = this;
		vm.email = '';
    vm.password = '';
    vm.login  = login;

    function login() {
	    AuthService
        .login(vm.email, vm.password)
	        .then(
	            function(data, status, headers, config) {
	               if (AuthService.isAuthenticated)
	                  return $state.go('index');
	            },
	            function (error) {
	              alert(error);
	            }
	        );
    };
	}
})();