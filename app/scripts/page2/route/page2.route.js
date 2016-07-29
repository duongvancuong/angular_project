(function() {
	'use strict';

	angular.module('myapp.page2',[]);
	angular.module('myapp.page2').config(page2);

	page2.$inject = ['$stateProvider'];
	function page2($stateProvider) {
		$stateProvider
			.state('page2', {
				url: '/page2',
				templateUrl: 'views/ui-view.html',
				title: 'Page 2'
			})
			.state('page2.news', {
				url: '/news',
				templateUrl: 'scripts/page2/views/page2-newsList.html',
				controller: 'Page2Ctrl',
				title: 'Page 2 News'
			});
	}	

})();