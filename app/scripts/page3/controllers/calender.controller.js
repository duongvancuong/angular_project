(function() {
	'use strict';
	angular
		.module('myapp.page3')
		.controller('CalenderCtrl',CalenderCtrl);

	CalenderCtrl.$inject = ['$scope'];
	function CalenderCtrl($scope) {
		$scope.day = new Date();
	}
})();