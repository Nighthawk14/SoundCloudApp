'use strict';

describe('Controller: TrackCtrl', function () {

  // load the controller's module
  beforeEach(module('soundCloudApp'));

  var TrackCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrackCtrl = $controller('TrackCtrl', {
      $scope: scope
    });
  }));

});
