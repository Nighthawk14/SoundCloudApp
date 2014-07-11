'use strict';

/**
 * @ngdoc function
 * @name soundCloudApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the soundCloudApp
 */
angular.module('soundCloudApp')
  .controller('UserCtrl',['$scope','$state','Soundcloud',function ($scope,$state,Soundcloud) {
    Soundcloud.get('/users/'+$state.params.id).then(function(user){
      console.log(user);
    },function(err){
      console.log(err);
    });
  }]);
