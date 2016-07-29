(function() {
	'use strict';

	angular.module('myapp.page1').controller('Page1PostCtrl', Page1PostCtrl);

	Page1PostCtrl.$inject = ['$scope','$state', '$stateParams'];

	function Page1PostCtrl($scope, $state, $stateParams) {
		
		$scope.NewPost = {};

		$scope.objectPost = [
			{name:'ABC', money:12, active:false}, 
			{name:'ZXC', money:14, active:false},
			{name:'SDF', money:5, active:false},
			{name:'SFG', money:10, active:false}
		];

		$scope.setObject = function() {

			$scope.NewPost.name = $stateParams.name;
			$scope.NewPost.money = $stateParams.money;
			$scope.NewPost.active = false;
			var count = 0;
			if($scope.NewPost.name && $scope.NewPost.money) {
				
				angular.forEach($scope.objectPost, function(post) {
					if(angular.equals(post, $scope.NewPost)) {
						return;
					}
					count++;
				});
				if($scope.objectPost.lenght != count) {
					$scope.objectPost.push($scope.NewPost);
				}
			}
		};

		$scope.toggleActive = function(post) {
			post.active = !post.active;
		};

		$scope.total = function() {
			var total = 0;

			angular.forEach($scope.objectPost, function(post) {
				if(post.active) {
					total += parseInt(post.money);
				}
			});

			return total;
		};

		$scope.comeBack = function() {
			$state.go('index');
		}

		$scope.setObject();
	}



})();