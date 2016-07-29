(function() {
  'use strict';

  angular
  	.module('myapp.page2')
  	.factory('page2NewsService',page2NewsService);

  page2NewsService.$inject = ['$http','$q'];
  function page2NewsService($http, $q) {
  	var url = 'https://jsonplaceholder.typicode.com/posts';

  	var service = {
  		'getNews': getNews
  	};

  	return service;

  	function getNews() {
  		var deferred = $q.defer();

  		$http.get(url)
  			.success(function(data) {
  				deferred.resolve(data);
  			})
  			.error(function() {
  				deferred.reject(data);
  			});
  		return deferred.promise;
  	}
  }

})();