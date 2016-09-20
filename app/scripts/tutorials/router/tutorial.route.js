(function() {
  'use strict';

  angular.module('myapp.tutorial',[]);
  angular.module('myapp.tutorial').config(tutorial);

  tutorial.$inject = ['$stateProvider'];
  function tutorial($stateProvider) {
    $stateProvider
      .state('tutorials', {
        url: '/tutorials',
        templateUrl: 'scripts/tutorials/views/index.html'
      });
      // .state('tutorials.responsive', {
      //   url: '/responsive-table',
      //   templateUrl: 'scripts/tutorials/views/index.html',
      //   Controller: 'TutorialsCtrl',
      //   ControllerAs: 'tutorials',
      //   title: 'Responsive Table'
      // });
  }

})();
