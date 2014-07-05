'use strict';

/**
 * @ngdoc directive
 * @name soundCloudApp.directive:sound
 * @description
 * # sound
 */
angular.module('soundCloudApp')
  .directive('sound', function () {
    return {
      templateUrl: '../../partials/sound.html',
      restrict: 'EA'
    };
  });
