(function() {
	'use strict';

	angular.module('myapp.page1',[]);
	angular.module('myapp.page1').config(page1);

	page1.$inject = ['$stateProvider'];
	function page1($stateProvider) {
		$stateProvider
			.state('page1', {
				url: '/page1',
				templateUrl: 'views/ui-view.html',
				title: 'Page 1'
			})
			.state('page1.add', {
				url: '/add',
				templateUrl: 'modules/page1/views/page1.html',
				controller: 'Page1Ctrl',
				title: 'Page 1'
			})
			.state('page1.post', {
				url: '/post/:name/:money',
				templateUrl: 'modules/page1/views/page1-post.html',
				controller: 'Page1PostCtrl',
				title: 'Page 1 Post'
			});
	}	

})();