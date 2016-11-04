(function() {
	'use strict';
	angular.module('myapp').controller('DropdownCtrl',DropdownCtrl);
	DropdownCtrl.$inject = ['$scope'];

	function DropdownCtrl($scope) {
		$scope.colours = [{
		name: "Red",
		hex: "#F21B1B"
		}, {
			name: "Blue",
			hex: "#1B66F2"
		}, {
			name: "Green",
			hex: "#07BA16"
		}];
		$scope.colour = "";
	}
})();