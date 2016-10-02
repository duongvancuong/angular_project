(function () {
  'use strict';
  angular.module('myapp').factory('ExampleDataService',ExampleDataService);
  ExampleDataService.$inject = ['$q','$http','$window'];

  function ExampleDataService($q,$http,$window) {
    var Url = 'http://movieapp-sitepointdemos.rhcloud.com/';
    var service = {
      'getListMovie': getListMovie,
      'getMoive': getMoive,
      'createNewMovie': createNewMovie,
      'updateMoive': updateMoive,
      'deleteMovie': deleteMovie
    };
    return service;

    function getListMovie() {
      var url = Url + 'api/movies';
      var deffered = $q.defer();
      $http.get(url)
        .success(function(data) {
          deffered.resolve(data);
        })
        .error(function(errorData) {
          deffered.reject(errorData);
        });

      return deffered.promise;
    }

    function getMoive(movieId) {
      var url = Url + 'api/movies/' + movieId;
      var deffered = $q.defer();
      $http.get(url)
        .success(function(data) {
          deffered.resolve(data);
        })
        .error(function(errorData) {
          deffered.reject(errorData);
        });
      return deffered.promise;
    }

    function createNewMovie(newMoive) {
      var url = Url + 'api/movies';
      var deffered = $q.defer();
      $http.post(url,newMoive)
        .success(function(data) {
          deffered.resolve(data);
        })
        .error(function(errorData) {
          deffered.reject(errorData);
        });
      return deffered.promise;
    }

    function updateMoive(updateMoive) {
      var url = Url + 'api/movies';
      var deffered = $q.defer();
      $http.put(url,updateMoive)
        .success(function(data) {
          deffered.resolve(data);
        })
        .error(function(errorData) {
          deffered.reject(errorData);
        });
      return deffered.promise;
    }

    function deleteMovie(movieId) {
      var url = Url + 'api/movies/' + movieId;
      var deffered = $q.defer();
      $http.delete(url)
        .success(function(data) {
          deffered.resolve(data);
        })
        .error(function(errorData) {
          deffered.reject(errorData);
        });
      return deffered.promise;
    }

  }
})();
