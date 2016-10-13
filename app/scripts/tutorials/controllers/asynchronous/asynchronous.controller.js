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

      vm.getDataOne = function () {
        ExampleDataService.getListMovie().then(function (successData) {
          vm.listDataOne = successData;
          console.log('DataOne', vm.listDataOne);
// This is asynchronous way simple Once
          // vm.getDataTwo().then(function(data){
          //   vm.testData(data);
          // });

          vm.asyn(vm.getDataTwo).then(function() {
            vm.testData(vm.listDataTwo);
          });
        })
        .catch(function (errorData) {
          console.log(errorData);
        });
      };

      vm.getDataTwo = function () {
        var deffered = $q.defer();
        ExampleDataService.getListMovie().then(function (successData) {
          vm.listDataTwo = successData;
          console.log('DataTwo', vm.listDataTwo);
          deffered.resolve(vm.listDataTwo);

        })
        .catch(function (errorData) {
          console.log(errorData);
        });
        return deffered.promise;
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
// This is asynchronous way simple Two
      vm.asyn = function(data) {
        var deffered = $q.defer();
        deffered.resolve(data());
        return deffered.promise;
      };

      // var promise = new Promise(function(resolve, reject){
      //   resolve();
      //   reject();
      // });
      // promise.then(function(){
      //   vm.getDataTwo();
      // }).then(function() {
      //   vm.testData(vm.listDataTwo);
      // });

      vm.getDataOne();
      // vm.getDataTwo();
      // vm.getDataThree();
    }
})();
