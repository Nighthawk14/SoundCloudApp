'use strict';

describe('Service: SoundCloud', function () {

  // load the service's module
  beforeEach(module('soundCloudApp'));

  // instantiate service
  var SoundCloud,
  rootScope;
  beforeEach(inject(function (_Soundcloud_, _$rootScope_) {
    SoundCloud = _Soundcloud_;
    rootScope = _$rootScope_;
  }));

});
