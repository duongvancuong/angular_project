(function() {
	'use strict';
	angular.module('myapp').directive('scrollPanel',scrollPanel);
  scrollPanel.$inject = ['$state'];
	function scrollPanel($state) {
	    return {
			restrict: 'A',
			require : '?ngModel',
			scope: {
				ngModel: '='
			},
			templateUrl: 'scripts/animation-css3/views/scrollPanel.template.html',
			link:function (scope, el, attrs) {
        scope.panelBaseId = attrs.collapsePanelBodyId;
        scope.panelId = attrs.collapsePanelId;
        scope.state = $state.current.name;
        console.log(scope.state);
        $(document).ready(function(){
            angular.forEach(scope.ngModel, function(value, key){
                if (value.collapsed)
                {
                    $("#" + scope.panelBaseId + "-" + key).collapse('show');
                }
            });
        });
        
        scope.toggleCollapsedStates = function(ind){
            angular.forEach(scope.ngModel, function(value, key){
                if (key == ind)
                {
                    scope.ngModel[key].collapsed = !scope.ngModel[key].collapsed;
                    $("#" + scope.panelBaseId + "-" + ind).collapse('toggle');
                }
                else
                    scope.ngModel[key].collapsed = false;
            });
        }
      }
		};
	}
})();