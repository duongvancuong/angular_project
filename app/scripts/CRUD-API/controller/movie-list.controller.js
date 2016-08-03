(function() {
	'use strict';
	angular
		.module('myapp.movie')
		.controller('MovieListController',MovieListController);
	MovieListController.$inject = ['$scope','MovieService', 'popupService', '$state','$window','$stateParams'];
	function MovieListController($scope, MovieService, popupService, $state, $window, $stateParams) {

		$scope.ListMovie = [];
		$scope.getAllMovies = function() {
			MovieService.getListMovie().then(function(successData) {
				$scope.ListMovie = successData;
			}).catch(function(errorData) {
				$window.alert(errorData);
			});
		};

		$scope.deleteMovie = function(movieId) {
			if(popupService.showPopup("Really delete this ?")){
				MovieService.deleteMovie(movieId).then(function(successData) {
					$scope.getAllMovies();
					$state.go('movies.listMovie');
				}).catch(function(errorData) {
					$window.alert(errorData);
				});
			}
		};

		$scope.getAllMovies();
		

	}
})();