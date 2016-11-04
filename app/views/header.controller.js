(function() {
	'use strict';
	angular.module('myapp')
		.controller('HeaderController', HeaderController);

	HeaderController.$inject = ['$state', 'AuthService'];
	function HeaderController($state, AuthService) {
		var vm = this;
		vm.currentUser = AuthService.currentUser;
		vm.logout = logout;

		function logout() {
			AuthService.logout();
			$state.go('login');
		}
	}
})();