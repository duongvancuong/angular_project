(function() {
	'use strict';
	angular
		.module('myapp')
		.directive('ctrlInDirective', ctrlInDirective);

	function ctrlInDirective () {
		return {
			scope: {},
			name: 'ctrl',
			controller: '@',
			controllerAs: 'vm',
			templateUrl: 'modules/tutorials/directive/views/ctrlInDirective.html',
			link: function($scope, $element, $attrs, $ctrl) {
				
			}
		}
	}
})();