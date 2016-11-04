(function () {
	'use strict';
	angular.module('myapp')
		.filter('startWithLetterFilter', function() {
			return function (items, letter) {
				var itemFiltered = [];
				var letterMatch = new RegExp(letter, 'i');
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					if (letterMatch.test(item.title.substring(0, 1))) {
						itemFiltered.push(item);
					}
				}
				return itemFiltered;
			};
		});
})();