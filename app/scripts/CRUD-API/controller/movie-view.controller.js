(function() {
	'use strict';
	angular
		.module('myapp.movie')
		.controller('MovieViewController',MovieViewController);
	MovieViewController.$inject = ['$scope','MovieService','$state','$window','popupService','$stateParams'];
	function MovieViewController($scope, MovieService, popupService, $state, $window, $stateParams) {

		$scope.movieId = $stateParams.id;
		$scope.Movie = {};
		$scope.getMovie = function(movieId) {
			MovieService.getMoive(movieId).then(function(successData) {
				$scope.Movie = successData;
			}).catch(function(errorData) {
				$window.alert('Moive Empty -' +errorData);
			});
		};

		$scope.getMovie($scope.movieId);
	}
})();