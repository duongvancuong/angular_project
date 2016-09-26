(function(){
  'use strict';
  angular
    .module('myapp')
    .directive('buttonToggle',function() {
      return {
        restrict: 'EA'
        templateUrl: './views/button-toggle.html',
        scope: {
          toggle: '=',
        },
        link: function ($scope, ele, attr) {

        }
      };


    });
})();
