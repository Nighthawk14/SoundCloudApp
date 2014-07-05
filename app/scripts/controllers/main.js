'use strict';

/**
 * @ngdoc function
 * @name soundCloudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the soundCloudApp
 */
angular.module('soundCloudApp')
  .controller('MainCtrl', function ($scope) {
    $scope.play = function(track){
      console.log(track);
    };

    $(window).on('resize', function(){
      console.log($('.viewContainer'));
    });
  });
