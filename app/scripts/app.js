'use strict';

/**
 * @ngdoc overview
 * @name soundCloudApp
 * @description
 * # soundCloudApp
 *
 * Main module of the application.
 */
angular
  .module('soundCloudApp', [
    'ngCookies',
    'ui.router',
    'ngSanitize'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        url: '/',
        data: {
          state:'Stream'
        }
      })
      .state('user',{
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        url: '/user/:id',
        data: {
          state:'Profile'
        }
      })
      .state('track',{
        templateUrl: 'views/track.html',
        controller: 'TrackCtrl',
        url: '/track/:id',
        data: {
          state:'Now Playing'
        }
      });
    $urlRouterProvider.otherwise('/');
  });
