(function() {
	'use strict';
	angular.module('myapp').directive('calendar',calendar);

	// canlender.$inject = ['$scope'];

	function calendar() {
		return {
        restrict: "E",
        templateUrl: "modules/page3/views/calendar.html",
        scope: {
            selected: "="
        },
        link: function(scope) {
            scope.selected = _removeTime(scope.selected || moment());
            scope.month = new Date(scope.selected);

            var start = new Date(scope.selected);
            start.setDate(1)
            _removeTime(start);

            _buildMonth(scope, start, scope.month);

            scope.select = function(day) {
                scope.selected = day.date;  
            };

            scope.next = function() {
                var next = new Date(scope.month);
                _removeTime(next.month(next.getMonth()+1)).date(1);
                scope.month.month(scope.month.getMonth()+1);
                _buildMonth(scope, next, scope.month);
            };

            scope.previous = function() {
                var previous = new Date(scope.month);
                _removeTime(previous.month(previous.month()-1).date(1));
                scope.month.month(scope.month.month()-1);
                _buildMonth(scope, previous, scope.month);
            };
        }	
    };
    
    function _removeTime(date) {
        return date.setDate(0);
    }

    function _buildMonth(scope, start, month) {
        scope.weeks = [];
        var done = false, date = new Date(start), monthIndex = date.getMonth(), count = 0;
        while (!done) {
            scope.weeks.push({ days: _buildWeek(new Date(date), month) });
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
    }

    function _buildWeek(date, month) {
        var days = [];
        for (var i = 0; i < 7; i++) {
            days.push({
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            });
            date = new Date(date);
            date.add(1, "d");
        }
        return days;
    }
	}

})();