(function() {
  'use strict';

  angular.module('myapp.tutorial',[]);
  angular.module('myapp.tutorial').config(tutorial);

  tutorial.$inject = ['$stateProvider'];
  function tutorial($stateProvider) {
    $stateProvider
      .state('tutorials', {
        url: '/tutorials',
        templateUrl: 'scripts/tutorials/views/index.html',
        title: 'Tutorials'
      })
      .state('tutorials.responsive', {
        url: '/responsive-table',
        templateUrl: 'scripts/tutorials/views/table.html',
        Controller: 'TutorialsCtrl',
        ControllerAs: 'tutorials',
        title: 'Responsive table'
      });
  }

})();
