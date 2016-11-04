(function () {
	'use strict';
	angular.module('myapp')
		.directive('fileUpload', fileUpload);

	function fileUpload() {
		function fileUploadCtrl() {
			var files = [];

			function uploadFiles(files) {

			}

			this.files = files;
			this.uploadFiles = uploadFiles;
		}

		function link ($scope, $element, $attrs, $ctrl) {
			var drop = $element.find('.drop-zone')[0];

			function onDrop(e) {
				if (e.dataTransfer && e.dataTransfer.files) {
					$ctrl.uploadFiles(e.dataTransfer.files);
					$scope.$apply();
				}
			}

			drop.addEventListener('drop', onDrop, false);
		}

		return {
			restrict: 'E', 
			scope: {}, 
			controller: fileUploadCtrl,
	    controllerAs: 'fileCtrl',
	    link: link,
			require: '^ngModel',
			templateUrl: 'modules/tutorials/directive/views/fileUpload.html'
		}
	}
})();