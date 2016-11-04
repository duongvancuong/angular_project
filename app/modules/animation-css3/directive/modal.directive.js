(function () {
	'use strict';
	angular.module('myapp').directive('customModal',customModal);
	customModal.$inject = ['$http','$compile'];
	function customModal($http,$compile) {
		return {
			restrict: 'A',
			transclude: true,
			scope: {
				ngModel: '='
			},
			templateUrl: 'modules/animation-css3/views/modal.template.html',
			// template: '',
			link: function(scope, el, attrs) {
				scope.modalId = attrs.modalId;
				scope.title = attrs.modalTitle;
				$http.jsonp(attrs.modalSrc);

				scope.getContents = function(data){
          $compile(data.contents)(scope, function(compliledElement, scope){
              el.append(compliledElement);
          });
	      };
			}
		};
	}
})();