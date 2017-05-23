(function () {
	'use strict';
	angular.module('myapp.todo').factory('TodoService',TodoService);
	TodoService.$inject = ['$q','$http','$window'];

	function TodoService($q,$http,$window) {
		var Url = 'http://localhost:3000/';
		var toDo;
		var service = {
			'getListTodo': getListTodo,
			'getTodo': getTodo,
			'createNewTodo': createNewTodo,
			'updateTodo': updateTodo,
			'deleteTodo': deleteTodo
			// 'setTodo': setTodo,
			// 'getTodo': getTodo
		};
		return service;

		// function setTodo(todo) {
		// 	toDo = todo;
		// }

		// function getTodo() {
		// 	return toDo
		// }

		function getListTodo() {
			var url = Url + 'api/todos';
			var deffered = $q.defer();
			$http.get(url)
				.then(function(data) {
					deffered.resolve(data);
				})
				.catch(function(errorData) {
					deffered.reject(errorData);
				});

			return deffered.promise;
		}

		function getTodo(todo_id) {
			var url = Url + 'api/todos/' + todo_id;
			var deffered = $q.defer();
			$http.get(url)
				.then(function(data) {
					deffered.resolve(data);
				})
				.catch(function(errorData) {
					deffered.reject(errorData);
				});
			return deffered.promise;
		}

		function createNewTodo(newTodo) {
			var url = Url + 'api/todos';
			var deffered = $q.defer();
			$http.post(url,newTodo)
				.then(function(data) {
					deffered.resolve(data);
				})
				.catch(function(errorData) {
					deffered.reject(errorData);
				});
			return deffered.promise;
		}

		function updateTodo(todoUpdate) {
			var url = Url + 'api/todos/' + todoUpdate.id;
			var params = { title: todoUpdate.attributes.title }
			var deffered = $q.defer();
			$http.put(url,params)
				.then(function(data) {
					deffered.resolve(data);
				})
				.catch(function(errorData) {
					deffered.reject(errorData);
				});
			return deffered.promise;
		}

		function deleteTodo(todoId) {
			var url = Url + 'api/todos/' + todoId;
			var deffered = $q.defer();
			$http.delete(url)
				.then(function(data) {
					deffered.resolve(data);
				})
				.catch(function(errorData) {
					deffered.reject(errorData);
				});
			return deffered.promise;
		}

	}
})();
