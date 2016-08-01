(function() {
	'use strict';
	angular.module('myapp').controller('textCtrl',textCtrl);
	textCtrl.$inject = ['$scope'];
	function textCtrl($scope) {
		$scope.value = '';
	}
})();