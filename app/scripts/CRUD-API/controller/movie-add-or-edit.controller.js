(function() {
	'use strict';
	angular
		.module('myapp.movie')
		.controller('MovieAddOrEditController',MovieAddOrEditController);
	MovieAddOrEditController.$inject = ['$scope','MovieService','$state','$window','popupService','$stateParams'];
	function MovieAddOrEditController($scope, MovieService, $state, $window,popupService, $stateParams) {

		$scope.movieId = $stateParams.id;

		$scope.createNewMovie = function(newMovie) {
			MovieService.createNewMovie(newMovie).then(function(successData) {
				$scope.message = successData;
				$state.go('movies.listMovie');
			}).catch(function(errorData) {
				$window.alert('Don\'t create new Movie');
			});
		};

		$scope.updateMoive = function(updateMovie) {
			MovieService.updateMoive(updateMovie).then(function(successData) {
				$state.go('movies.listMovie');
			}).catch(function(errorData) {
				$window.alert('Not update Moive');
			});
		};
	}
})();