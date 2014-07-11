'use strict';

/**
 * @ngdoc service
 * @name soundCloudApp.SoundCloud
 * @description
 * # SoundCloud
 * Service in the soundCloudApp.
 */

angular.module('soundCloudApp')
  .service('Soundcloud',['$q',function Soundcloud($q) {

    SC.initialize({
      client_id: 'f8e5c1d3d7573baf7562d95fab50f8f6',
      redirect_uri: 'http://localhost:9000/#/oauth',
    });

    angular.extend(this, {
      get: function(path,options){
        var deferred = $q.defer();
        if(!options){ options = {}; }
        SC.get(path, options, function(res, error){
          if(error){
            deferred.reject(error);
          }else{
            deferred.resolve(res);
          }
        });
        return deferred.promise;
      },
      connect: function(){
        var self = this;
        var deferred = $q.defer();
        SC.connect(function(){
          self.get('/me').then(function(res){
            deferred.resolve(res);
          },function(err){
            deferred.reject(err);
          });
        });
        return deferred.promise;
      },
      play: function(path){
        var deferred = $q.defer();
        SC.stream(path, function(sound){
          deferred.resolve(sound);
        });
        return deferred.promise;
      }
    });

    return this;
  }]);
