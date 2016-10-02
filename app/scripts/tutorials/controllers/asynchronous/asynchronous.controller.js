(function (){
  'use strict';
  angular
    .module('myapp.tutorial')
    .controller('AsynchronousCtrl', AsynchronousCtrl);
    AsynchronousCtrl.$inject = ['$scope','ExampleDataService','$state','$window','$stateParams', '$q'];

    function AsynchronousCtrl($scope, ExampleDataService, $state, $window, $stateParams, $q) {
      var vm = this;
      vm.listDataOne = [];
      vm.listDataTwo = [];
      vm.listDataThree = [];
      vm.myFirstDeferred = $q.defer();

      // async(function(value) {
      //     myFirstDeferred.resolve(value);
      // }, function(errorReason) {
      //     myFirstDeferred.reject(errorReason);
      // });

      vm.asyn = function () {
        var deffered = $q.defer();
        var a = vm.getDataTwo();
        deffered.resolve(vm.listDataTwo);
        return deffered.promise;
      };
      vm.asyncTask = () =>
        new Promise(resolve => {
          var a = vm.getDataTwo();
          resolve(a);
      });
      var a;
      vm.test = function () {
        vm.getDataTwo();
        console.log('234234');
        return a;
      };


      vm.getDataOne = function () {
        ExampleDataService.getListMovie().then(function (successData) {
          vm.listDataOne = successData;
          console.log('DataOne', vm.listDataOne);
          // var test = vm.asyn();
          // var deferred = $q.defer();
          // vm.getDataTwo().then(function(listDataTwo) {
          //   console.log(listDataTwo);
          //   vm.testData(123);
          // }).catch(function() {
          //   console.log('error');
          // });
          // vm.test();
          // deferred.resolve(a);
          var promise = vm.getDataTwo();
          console.log(promise);
          // promise.then(function(listDataTwo) {
            // console.log(listDataTwo);
            // vm.testData(123);
          // });
          // vm.asyncTask().then(() => {
          //   vm.testData(vm.listDataTwo);
          // });
        })
        .catch(function (errorData) {
          console.log(errorData);
        });
      };

      vm.getDataTwo = function () {
        ExampleDataService.getListMovie().then(function (successData) {
          vm.listDataTwo = successData;
          console.log('DataTwo', vm.listDataTwo);
          var deffered = $q.defer();
          deffered.resolve(vm.listDataTwo);
          console.log(deffered.promise);
          return deffered.promise;
        })
        .catch(function (errorData) {
          console.log(errorData);
          var deffered = $q.defer();
          deffered.reject();
          return deffered.promise;
        });
      };

      vm.getDataThree = function () {
        ExampleDataService.getListMovie().then(function (successData) {
          vm.listDataThree = successData;
          console.log('DataThree', vm.listDataThree);
        })
        .catch(function (errorData) {
          console.log(errorData);
        });
      };

      vm.testData = function(data) {
        console.log(data);
      };

      vm.getDataOne();
      // vm.getDataTwo();
      // vm.getDataThree();
    }
})();
