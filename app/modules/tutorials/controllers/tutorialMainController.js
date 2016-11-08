(function() {
	'use strict';
	angular.module('myapp.tutorial')
		.controller('TutorialMainController', TutorialMainController);

	TutorialMainController.$inject = ['$q', '$http', '$state', '$stateParams', '$scope'];
	function TutorialMainController($q, $http, $state, $stateParams, $scope) {
		var vm = this;
		vm.userName = 'Value in Controler';
		vm.movies = [
			{
				title: 'The Shawshank Redemption',
				ReleaseDate: '1994',
				IMDBRating: '9.3/10',
				Director: 'Frank Darabont',
				Staring: 'Tim Robbins, Morgan Freeman, Bob Gunton'
			},
			{
				title: 'The Godfather',
				ReleaseDate: '1972',
				IMDBRating: '9.2/10',
				Director: 'Francis Ford Coppola',
				Staring: 'Marlon Brando, Al Pacino, James Caan'
			},
			{
				title: 'The Dark Knight',
				ReleaseDate: '2008',
				IMDBRating: '9/10',
				Director: 'Christopher Nolan',
				Staring: 'Christian Bale, Heath Ledger, Aaron Eckhart'
			},
			{
				title: 'Schindler\'s List ',
				ReleaseDate: '1993',
				IMDBRating: '8.9/10',
				Director: 'Steven Spielberg',
				Staring: 'Liam Neeson, Ralph Fiennes, Ben Kingsley'
			}
		];
	}
})();