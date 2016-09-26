(function(){
  'use strict';
  angular
    .module('myapp')
    .directive('fileReader',function(){
      return {
        restrict: 'A',
        scope: {
          fileReader:"="
        },
        link: function(scope, element) {
          $(element).on('change', function(changeEvent) {
            var files = changeEvent.target.files;
            console.log("Info file :",files);
            if (files.length) {
              var r = new FileReader();
              r.onload = function(e) {
                console.log("Content file:",e.target.result);
                var a = [];
                a = e.target.result.split('\n');
                console.log("Content Array:",a);
                  var contents = e.target.result;
                  scope.$apply(function () {
                    scope.fileReader = contents;
                  });
              };
              r.readAsText(files[0]);
            }
          });
        }
      };
    });

})();
