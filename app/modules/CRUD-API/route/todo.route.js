(function () {
	'use strict';
	angular.module('myapp.todo',[]);
	angular.module('myapp.todo').config(todoRoute);

	todoRoute.$inject = ['$stateProvider'];
	function todoRoute ($stateProvider) {
		$stateProvider
			.state('todos',{
				url: '/todos',
				templateUrl: 'views/ui-view.html',
				controller: 'TodoListController'
			})
			.state('todos.listTodo',{
				url: '/all',
				templateUrl: 'modules/CRUD-API/views/movie.html',
				controller: 'TodoListController',
        controllerAs: 'TodoListCtrl'
			})
			.state('todos.viewTodo',{
				url: '/:id/view',
				templateUrl: 'modules/CRUD-API/views/movie-view.html',
				controller: 'TodoViewController'
			})
			.state('todos.newTodo',{
				url: '/new',
				templateUrl: 'modules/CRUD-API/views/movie-add.html',
				controller: 'TodoAddOrEditController',
				flag: 'Add'
			})
			.state('todos.editTodo',{
				url: '/:id/edit',
				templateUrl: 'modules/CRUD-API/views/movie-edit.html',
				controller: 'TodoAddOrEditController'
			});
	}
})();
