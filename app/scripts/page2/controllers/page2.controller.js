(function() {
	'use strict';

	angular.module('myapp.page2').controller('Page2Ctrl',Page2Ctrl);

	Page2Ctrl.$inject = ['$scope', '$state', '$stateParams','page2NewsService'];

	function Page2Ctrl($scope, $state, $stateParams, page2NewsService) {

		$scope.getNewsList = [];

		$scope.getNewsList = function() {

			page2NewsService.getNews().then(function(successData) {
				$scope.getNewsList = successData;
			}).catch(function(errorData){
				$scope.getNewsList = [];
			});
		}

		$scope.getNewsList();
		
	}

})();