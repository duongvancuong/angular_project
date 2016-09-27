(function(){
	'use strict';
	angular
		.module('myapp.tutorial')
		.controller('buttonCssCtrl',buttonCssCtrl);

		buttonCssCtrl.$inject = ['$scope','$state','$window','$stateParams'];

		function buttonCssCtrl ($scope, $state, $window, $stateParams) {
			var vm = this;
			vm.toggle = true;
			// vm.dataList = _listData;
			// console.log(_listData);

		}
})();