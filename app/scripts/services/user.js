'use strict';

/**
 * @ngdoc service
 * @name soundCloudApp.User
 * @description
 * # User
 * Factory in the soundCloudApp.
 */
angular.module('soundCloudApp')
  .factory('User', function () {

    var User = function(options){
      angular.extend(this,options);
      return this;
    };

    // Public API here
    return User;
  });
