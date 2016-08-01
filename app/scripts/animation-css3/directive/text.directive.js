(function() {
	'use strict';
	angular.module('myapp').directive('text',text);

	function text() {

		return {
			restrict: "E",
			templateUrl: "scripts/animation-css3/views/focus.template.html",
			scope: {
				type: "@",
				placeholder: "@",
				ngModel: "="
			},
			link: function(scope, element) {
				$(element).on("focus", "input", function() {
					$(element).addClass("focus");
				});
				$(element).on("blur", "input", function(){
					$(element).addClass('focus');
				});
			}
		}
	}
})();