(function() {
	'use strict';
	angular.module('myapp.page3',[]);
	angular.module('myapp.page3').config(Page3Config);

	Page3Config.$inject = ['$stateProvider','$httpProvider'];
	function Page3Config($stateProvider, $httpProvider) {
		$stateProvider
			.state('page3',{
				url: '/page3',
				templateUrl: 'scripts/animation-css3/views/text.html',
				controller: 'CalenderCtrl',
				title: 'Page 3 Calender'
			});
	}

})();
