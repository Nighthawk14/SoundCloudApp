'use strict';

/**
 * @ngdoc directive
 * @name soundCloudApp.directive:sound
 * @description
 * # sound
 */
angular.module('soundCloudApp')
  .directive('sound', function () {
    return {
      templateUrl: '../../partials/sound.html',
      restrict: 'EA'
    };
  })
  .directive('menu', [function(){
    // Runs during compile
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      // scope: {}, // {} = isolate, true = child, false/undefined = no change
      // controller: function($scope, $element, $attrs, $transclude) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '',
      templateUrl: '../../partials/menu.html',
      // replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      //link: function($scope, iElm, iAttrs, controller) {}
    };
  }])
  .directive('cover', ['$rootScope',function($rootScope){
    // Runs during compile
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      scope: true, // {} = isolate, true = child, false/undefined = no change
      // controller: function($scope, $element, $attrs, $transclude) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
      template:  '<div class="cover">\
              <div class="wrapper">\
                <div class="username caption">{{user.username}}</div>\
                <div class="clear"></div>\
                <div class="followers caption"><i class="fa fa-users"></i>{{user.followers_count}} follower</div>\
              </div>\
            </div>',
      // templateUrl: '',
      replace: true,
      // transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      link: function($scope, iElm) {
        $scope.$parent.$watch('user', function(newValue){
          if(newValue){
            var url = newValue.avatar_url.replace('large','t200x200');
            iElm.css('background-image','url("'+url+'")');
          }
        });
        $rootScope.$on('$stateChangeStart', 
          function(event, toState){
            $('.menu').find('li').removeClass('active');
            $('.menu').find('.'+toState.data.state.toLowerCase()).addClass('active');
          });
      }
    };
  }]);
