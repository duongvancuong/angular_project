(function() {
  'use strict';
  angular.module('myapp')
  .directive('buttonToggle', buttonToggle);

  function buttonToggle() {
    function link(scope, element, attrs, ctrl) {
      scope.$watch('toggle', function(newValue, oldValue) {

      });
      element.bind('click',function() {
        scope.$apply(function(){
          scope.a = !scope.a;
        });
        console.log(scope.a);
      });
    }
    return {
      restrict: 'EA',
      replace: true,
      name: 'ctrl',
      controller: '@',
      controllerAs: 'butCtrl',
      scope: true,
      templateUrl: "scripts/tutorials/directive/views/button-toggle.html",
      link: link
    };
  }
})();

