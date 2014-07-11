'use strict';

/**
 * @ngdoc function
 * @name soundCloudApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the soundCloudApp
 */
angular.module('soundCloudApp')
  .controller('AppCtrl',['$scope','Soundcloud','$q','User','$rootScope',function ($scope,Soundcloud,$q, User,$rootScope) {
    $scope.connecting = false;

    $scope.connect = function(){
      var deferred = $q.defer();
      $scope.connecting = true;
      Soundcloud.connect().then(function(user){
        $scope.user = new User(user);
        $scope.connecting = false;

        Soundcloud.get('/e1/me/stream').then(function(res){
          $scope.user.stream = res;
          deferred.resolve(res);
        },function(err){
          deferred.reject({get:err});
        });
      },function(error){
        deferred.reject({connect:error});
      });
      return deferred.promise;
    };

    $scope.disconnect = function(){
      delete $scope.user;
    };

    $rootScope.$on('$stateChangeStart', 
      function(event, toState){
        $scope.currentState = toState.data.state;
      });
  }]);
