(function() {
	'use strict';

	angular.module('myapp.page1').controller('Page1Ctrl',Page1Ctrl);

	Page1Ctrl.$inject = ['$scope', '$state', '$stateParams'];

	function Page1Ctrl($scope, $state, $stateParams) {

		// $scope.showtooltip = false;

		$scope.hideTooltip = function() {
			$scope.showtooltip = false;
		};

		$scope.toggleTooltip = function(event) {
			event.stopPropagation();
			$scope.showtooltip = true;
		};

		$scope.sendMessage = function(isValied,name, money) {
			if(isValied) {
				console.log('sendMessage');
				$state.go('page1.post', {name: name, money: money});
			}
		};
		
	}

})();