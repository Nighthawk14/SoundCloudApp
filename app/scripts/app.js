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
        url: '/'
      })
      .state('oauth',{
        url:'/oauth',
        templateUrl:'views/oauth.html'
      })
      .state('about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        url:'/about'
      });
    $urlRouterProvider.otherwise('/');
  });
