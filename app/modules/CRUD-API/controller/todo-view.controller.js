(function() {
	'use strict';
	angular
		.module('myapp.todo')
		.controller('TodoViewController',TodoViewController);
	TodoViewController.$inject = ['$scope','TodoService','$state','$window','popupService','$stateParams'];
	function TodoViewController($scope, TodoService, popupService, $state, $window, $stateParams) {

		$scope.todoId = $stateParams.id;
		$scope.Todo = {};

		$scope.getTodo = function(todoId) {
			TodoService.getTodo(todoId).then(function(successData) {
				$scope.Todo = successData.data.data;
			}).catch(function(errorData) {
				$window.alert('Moive Empty -' +errorData.message);
			});
		};

		$scope.getTodo($scope.todoId);

		// TodoService.setTodo($scope.Todo);
	}
})();
