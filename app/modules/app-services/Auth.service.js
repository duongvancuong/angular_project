(function() {
	'use strict';
	angular.module('myapp')
		.factory('AuthService', AuthService);

	AuthService.$inject = ['$http', '$q', '$localStorage'];
		function AuthService($http, $q, $localStorage) {
			var authService = {
	      currentUser: {
	          token: null,
	          username: null
	      },
	      login: login,
	      logout: logout,
	      updateCurrentUser: function(token, username) {
	           this.currentUser.token = token;
	           this.currentUser.username = username;
	      },
	      isAuthenticated: function() {
	          return this.currentUser.token ? true : false;
	      }
	  	}
	  	return authService;

	  function login() {
	    return $http.get('./data/login.json').then(function(data, status, headers, config) {
	      var res = data.data;
	      if (res.status) {
	          $http.defaults.headers.common.Authorization = 'Bearer ' + res.data.token;
	          $localStorage.currentUser = {
	              username: res.data.name,
	              token: res.data.token
	          };
	          authService.currentUser.token = res.data.token;
	          authService.currentUser.username = res.data.name;
	      }
	      return;
	    });
	  }

	  function logout() {
	    $http.defaults.headers.common.Authorization = null;
	    $localStorage.currentUser = null;
	    authService.currentUser.token = null;
	    authService.currentUser.username = null;
	    return;
	  }
	}
})();