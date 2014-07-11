'use strict';

describe('Directive: App', function () {

  // load the directive's module
  beforeEach(module('soundCloudApp'));

  var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

});
