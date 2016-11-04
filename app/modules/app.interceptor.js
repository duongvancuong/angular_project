(function() {
	'use strict';
	angular.module('myapp')
		.factory('authInterceptor', authInterceptor);

	authInterceptor.$inject = ['$q', '$rootScope', '$window', '$localStorage'];
	function authInterceptor($q, $rootScope, $window, $localStorage) {
		return {
	    request: function (config) {
	      config.headers = config.headers || {};
	      if ($localStorage.currentUser) {
	        config.headers.Authorization = 'Bearer ' + $localStorage.currentUser.token;
	      }
	      return config;
	    },
	    response: function (response) {
	      if (response.status === 401) {
	        // to do something
	      }
	      return response || $q.when(response);
	    }
	  };

		// return function (promise) {
		// 	return promise.then(function(response) {
  //       // do something on success

  //       return response;
  //     }).catch(function(response) {
  //       if (response.status === 403) {
  //         event.preventDefault();
  //         $state.go('login');
  //       }
  //       // do something on error

  //       return $q.reject(response);
  //     });
		// };
	}
})();