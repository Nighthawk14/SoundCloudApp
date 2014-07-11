'use strict';

/**
 * @ngdoc function
 * @name soundCloudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the soundCloudApp
 */
angular.module('soundCloudApp')
  .controller('MainCtrl', ['$scope','Soundcloud',function ($scope,Soundcloud) {
    var _requestPlaying = false;
    $scope.sound = null;
    $scope.playing = false;
    $scope.play = function(track){
      if(_requestPlaying){return;}
      _requestPlaying = true;

      var play = function(track){
        Soundcloud.play('/tracks/'+track.id).then(function(sound){
            _reset(false,true);
            $scope.sound = sound;
            $scope.sound.play();
            $scope.sound.track = track;
            $scope.$parent.user.currentSound = sound;
          },function(err){
            console.log(err);
          });
      };

      var _reset = function(req,play){
        _requestPlaying = req;
        $scope.playing = play;
      };

      if($scope.playing){
        $scope.sound.pause();
        _reset(false,false);
        if($scope.sound.track.id !== track.id)
        {
          play(track);
        }
      }else{
        if($scope.sound && $scope.sound.track.id === track.id){
          $scope.sound.play();
          _reset(false,true);
        }else{
          play(track);
        }
      }
    };
  }]);
