(function() {
	'use strict';
	angular
		.module('myapp.movie')
		.controller('MovieListController',MovieListController);
	MovieListController.$inject = ['$scope','MovieService', 'popupService', '$state','$window','$stateParams'];
	function MovieListController($scope, MovieService, popupService, $state, $window, $stateParams) {

		$scope.ListMovie = [];
    $scope.showDetails = 'false';

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
    $scope.number = '';
    $scope.list = [];
    $scope.addNumber = function() {
      var listNumber = [];
      $scope.list = [];
      listNumber = $scope.number.split(',');
      angular.forEach(listNumber, function(number) {
        if(!!number.replace(/\D+/g, "")) {
          $scope.list.push(number.replace(/\D+/g, ""));
        }
      });
      $scope.number = '';
      angular.forEach($scope.list, function(number) {
        $scope.number += number + ',\n';
      });
      console.log($scope.list);
    };

    $scope.change = function() {
      $scope.number = $scope.number.replace(/,/g , ';\n');
      console.log($scope.number);
    };

		$scope.getAllMovies();


	}
})();
