(function() {
  'use strict';
  angular.module('myapp')
  .directive('buttonToggle', buttonToggle);

  function buttonToggle() {
    function buttonToggleCtrl() {
      this.toggle
    }
    function link(scope, element, attrs, ctrl) {

    }
    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "modules/tutorials/directive/views/button-toggle.html",
      controllerAs: 'vm',
      controller: buttonToggleCtrl,
      link: link
    };
  }
})();

