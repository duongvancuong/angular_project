(function() {
	'use strict';
	angular
		.module('myapp.todo')
		.controller('TodoAddOrEditController',TodoAddOrEditController);
	TodoAddOrEditController.$inject = ['$scope','TodoService','$state','$window','popupService','$stateParams'];
	function TodoAddOrEditController($scope, TodoService, $state, $window,popupService, $stateParams) {

		$scope.todoId = $stateParams.id;
		$scope.Todo = {};
		$scope.toDoNew = { title: "", created_by: 1};
		$scope.flag = $state.current.flag

		$scope.getMovie = function(todoId) {
			TodoService.getTodo(todoId).then(function(successData) {
				$scope.Todo = successData.data.data;
			}).catch(function(errorData) {
				$window.alert('Moive Empty -' +errorData.message);
			});
		};

		$scope.createNewTodo = function(toDoNew) {
			TodoService.createNewTodo(toDoNew).then(function(successData) {
				$scope.message = successData;
				$state.go('todos.listTodo');
			}).catch(function(errorData) {
				$window.alert('Don\'t create new Movie');
			});
		};

		$scope.updateTodo = function(todoUpdate) {
			TodoService.updateTodo(todoUpdate).then(function(successData) {
				$state.go('todos.listTodo');
			}).catch(function(errorData) {
				$window.alert('Not update Todo');
			});
		};

		$scope.getMovie($scope.todoId);
	}
})();
