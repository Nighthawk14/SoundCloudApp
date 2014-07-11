'use strict';

/**
 * @ngdoc function
 * @name soundCloudApp.controller:TrackCtrl
 * @description
 * # TrackCtrl
 * Controller of the soundCloudApp
 */
angular.module('soundCloudApp')
  .controller('TrackCtrl',['$scope','$stateParams','Soundcloud',function ($scope,$stateParams,Soundcloud) {
    Soundcloud.get('/tracks/'+$stateParams.id).then(function(track){
      console.log(track);
    },function(err){
      console.log(err);
    });
  }]);
