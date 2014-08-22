// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


oppia.directive('coordTwoDimEditor', function($compile, warningsData) {
  return {
    link: function(scope, element, attrs) {
      scope.getTemplateUrl = function() {
        return OBJECT_EDITOR_TEMPLATES_URL + scope.$parent.objType;
      };
      $compile(element.contents())(scope);
    },
    restrict: 'E',
    scope: true,
    template: '<span ng-include="getTemplateUrl()"></span>',
    controller: function($scope) {
      $scope.schemaLatitude = {
        type: 'float',
        validators: [{
          id: 'is_at_least',
          min_value: -90.0
        }, {
          id: 'is_at_most',
          max_value: 90.0
        }]
      };

      $scope.schemaLongitude = {
        type: 'float',
        validators: [{
          id: 'is_at_least',
          min_value: -180.0
        }, {
          id: 'is_at_most',
          max_value: 180.0
        }]
      };

      if ($scope.$parent.value === '') {
        $scope.$parent.value = [0.0, 0.0];
      }
    }
  };
});
