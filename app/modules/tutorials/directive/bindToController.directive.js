(function() {
	'use strict';
	angular
		.module('myapp')
		.directive('bindToController', bindToController);

	function bindToController() {
		return {
			restrict: 'E', 
			scope: {
				name: '='
			},
			controller: 'TutorialMainController',
			controllerAs: 'vm',
			template: [
	        // vm.name doesn't exist just yet!
	        '<div><input ng-model="name"></div>{{name}}'
	    ].join(''),
	    link: function($scope, $element, $attrs, $ctrl) {}
		};
	}
})();