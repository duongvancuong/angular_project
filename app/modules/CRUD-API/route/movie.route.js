(function () {
	'use strict';
	angular.module('myapp.movie',[]);
	angular.module('myapp.movie').config(shoppingRoute);

	shoppingRoute.$inject = ['$stateProvider'];
	function shoppingRoute ($stateProvider) {
		$stateProvider
			.state('movies',{
				url: '/movies',
				templateUrl: 'views/ui-view.html',
				controller: 'MovieListController'
			})
			.state('movies.listMovie',{
				url: '/all',
				templateUrl: 'modules/CRUD-API/views/movie.html',
				controller: 'MovieListController',
        controllerAs: 'MovieListCtrl'
			})
			.state('movies.viewMovie',{
				url: '/:id/view',
				templateUrl: 'modules/CRUD-API/views/movie-view.html',
				controller: 'MovieViewController'
			})
			.state('movies.newMovie',{
				url: '/new',
				templateUrl: 'modules/CRUD-API/views/movie-add.html',
				controller: 'MovieAddOrEditController'
			})
			.state('movies.editMovie',{
				url: '/:id/edit',
				templateUrl: 'modules/CRUD-API/views/movie-edit.html',
				controller: 'MovieAddOrEditController'
			});
	}
})();
