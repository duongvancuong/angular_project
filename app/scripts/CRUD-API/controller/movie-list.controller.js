(function() {
	'use strict';
	angular
		.module('myapp.movie')
		.controller('MovieListController',MovieListController);
	MovieListController.$inject = ['$scope','MovieService', 'popupService', '$state','$window','$stateParams'];
	function MovieListController($scope, MovieService, popupService, $state, $window, $stateParams) {
    var vm = this;

		vm.ListMovie = [];
    vm.showDetails = 'false';
    $scope.fileContent = '';
    vm.listNumber = [];
    vm.listNumberError = [];

    $scope.$watch('fileContent', function(newValue) {
      if (newValue) {
        var content = $scope.fileContent;
        var reg = /^\d+$/;
        var arr = content.split('\n');
        console.log(arr);
        angular.forEach(arr, function(number) {
          vm.listNumber.push(number.replace(/\s+/g, ''));
        });

        // var a = content.replace(/\D+/g, "");
      }
    });

		vm.getAllMovies = function() {
			MovieService.getListMovie().then(function(successData) {
				vm.ListMovie = successData;
			}).catch(function(errorData) {
				$window.alert(errorData);
			});
		};

		vm.deleteMovie = function(movieId) {
			if(popupService.showPopup("Really delete this ?")){
				MovieService.deleteMovie(movieId).then(function(successData) {
					vm.getAllMovies();
					$state.go('movies.listMovie');
				}).catch(function(errorData) {
					$window.alert(errorData);
				});
			}
		};
    vm.number = '';
    vm.list = [];
    vm.addNumber = function() {
      var listNumber = [];
      vm.list = [];
      listNumber = vm.number.split(',');
      angular.forEach(listNumber, function(number) {
        if(!!number.replace(/\D+/g, "")) {
          vm.list.push(number.replace(/\D+/g, ""));
        }
      });
      vm.number = '';
      angular.forEach(vm.list, function(number) {
        vm.number += number + ',\n';
      });
      console.log(vm.list);
    };

    vm.change = function() {
      vm.number = vm.number.replace(/,/g , ';\n');
      console.log(vm.number);
    };

		vm.getAllMovies();
	}
})();
