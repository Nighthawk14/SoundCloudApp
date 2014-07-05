'use strict';

/**
 * @ngdoc function
 * @name soundCloudApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the soundCloudApp
 */
angular.module('soundCloudApp')
  .controller('AppCtrl',['$scope','Soundcloud','$q',function ($scope,Soundcloud,$q) {
    $scope.user = $scope.stream = null;
    $scope.connect = function(){
      var deferred = $q.defer();
      $scope.connecting = true;
      Soundcloud.connect().then(function(user){
        $scope.user = user;
        $scope.connecting = false;
        Soundcloud.get('/e1/me/stream').then(function(res){
          $scope.stream = res;
          deferred.resolve(res);
        },function(err){
          deferred.reject({get:err});
        });
      },function(error){
        deferred.reject({connect:error});
      });
      return deferred.promise;
    };
  }]);
