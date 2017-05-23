(function() {
	'use strict';
	angular
		.module('myapp.todo')
		.controller('TodoListController',TodoListController);
	TodoListController.$inject = ['$scope','TodoService', 'popupService', '$state','$window','$stateParams'];
	function TodoListController($scope, TodoService, popupService, $state, $window, $stateParams) {
    var vm = this;

		vm.listTodo = [];
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

		vm.getAllTodos = function() {
			TodoService.getListTodo().then(function(successData) {
				vm.listTodo = successData.data.data;
			}).catch(function(errorData) {
				$window.alert(errorData);
			});
		};

		vm.deleteTodo = function(todoId) {
			if(popupService.showPopup("Really delete this ?")){
				TodoService.deleteTodo(todoId).then(function(successData) {
					vm.getAllTodos();
					$state.go('todos.listTodo');
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

		vm.getAllTodos();
	}
})();
