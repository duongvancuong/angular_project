(function() {
	'use strict';
	angular
		.module('myapp.page3')
		.controller('CalenderCtrl',CalenderCtrl);

	CalenderCtrl.$inject = ['$scope'];
	function CalenderCtrl($scope) {
		$scope.day = new Date();

		$scope.collapseData = [
      {
          title: "Collapse Group Item Title 1",
          content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
          collapsed: true
      },
      {
          title: "Collapse Group Item Title 2",
          content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
          collapsed: false
      },
      {
          title: "Collapse Group Item Title 2",
          content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
          collapsed: false
      }
    ];
	}
})();