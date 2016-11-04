(function() {
  'use strict';

  angular.module('myapp.tutorial',[]);
  angular.module('myapp.tutorial').config(tutorial);

  tutorial.$inject = ['$stateProvider'];
  function tutorial($stateProvider) {
    $stateProvider
      .state('tutorials', {
        url: '/tutorials',
        templateUrl: 'modules/tutorials/views/index.html',
        title: 'Tutorials'
      })
      .state('tutorials.responsive', {
        url: '/responsive-table',
        templateUrl: 'modules/tutorials/views/table.html',
        Controller: 'TutorialsCtrl',
        ControllerAs: 'tutorials',
        title: 'Responsive table'
      })
      .state('tutorials.css', {
        url: '/css',
        templateUrl: 'views/ui-view.html',
        title: 'Tutorials HTML + CSS'
      })
      .state('tutorials.button', {
        url: '/button-css',
        templateUrl: 'modules/tutorials/views/button-css.html',
        title: 'Button CSS'
      });
  }

})();
