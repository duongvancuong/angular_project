(function() {
	'use strict';
	angular.module('myapp.todo').service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
})();
