(function(){
  'use strict';
  angular
    .module('myapp')
    .directive('toggle',function(){
      return {
        scope: {
          toggle: '=',
        },
        link: function($scope, element, attr){
          $scope.$watch('toggle', function(newValue, oldValue) {
            element.toggleClass('btn-danger', newValue);
            element.toggleClass('btn-success', oldValue);
          });
          element.bind('click',function() {
            $scope.$apply(function(){
              $scope.toggle = !$scope.toggle;
            });
          });
        }
      };
    });
})();
