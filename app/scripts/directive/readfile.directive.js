(function(){
  'use strict';
  angular
    .module('myapp')
    .directive('fileReader',function(){
      return {
        scope: {
          fileReader:"="
        },
        link: function(scope, element) {
          $(element).on('change', function(changeEvent) {
            var files = changeEvent.target.files;
            console.log(files);
            if (files.length) {
              var r = new FileReader();
              r.onload = function(e) {
                console.log(e.target.result);
                var a = [];
                a = e.target.result.split('\n');
                console.log(a);
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
