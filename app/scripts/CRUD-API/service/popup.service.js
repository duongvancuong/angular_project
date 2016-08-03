(function() {
	'use strict';
	angular.module('myapp.movie').service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
})();