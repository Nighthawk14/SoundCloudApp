'use strict';

describe('Controller: AppCtrl', function () {

  // load the controller's module
  beforeEach(module('soundCloudApp'));

  var AppCtrl,
    rootScope,
    q,
    Soundcloud,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$q, _Soundcloud_) {
    scope = $rootScope.$new();
    q = $q;
    rootScope = $rootScope;
    Soundcloud = _Soundcloud_;


    AppCtrl = $controller('AppCtrl', {
      $scope: scope,
    });
  }));

  it('should be connecting to Sound Cloud account', function(){
    scope.connect();
    expect(scope.connecting).toBe(true);
  });


});
