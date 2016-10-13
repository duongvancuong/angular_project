(function () {
  'use strict';
  angular
    .module('myapp')
    .directive(myUnique, 'myUnique');

    myUnique.$inject = ['dataService'];

    function myUnique () {
      function link (scope, element, attr, ngModel) {
        element.bind('blur', function(e) {
          if (!ngModel || !element.val()) return;
          var keyProperty = scope.$eval(attr.myUnique); // $eval() used to convert data into attributes myUnique to Object look like as `{property: 'email'}`
          var currentValue = element.val();
          dataService.checkUniqueValue(keyProperty.property, currentValue)
            .then(function (unique) {
              if (currentValue === element.val()) {
                ngModel.$setValidity('unique', unique); // $setValidity this is function special of angularJS to specify a current value of model have validated or yet
              }
            })
            .catch(function () {
              ngModel.$setValidity('unique', true);
            });
        });
      }
    }
})();


//  Form data HTML
// <form name="editForm">
// <input type="text" name="email"
//     ng-model="customer.email"
//     my-unique="{property: 'email'}"
//     required />
// <span class="errorMessage" ng-show="editForm.email.$dirty && editForm.email.$error.unique">
//     Email already in use
// </span>
// </form>
