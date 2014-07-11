'use strict';

describe('Service: nw', function () {

  // load the service's module
  beforeEach(module('soundCloudApp'));

  // instantiate service
  var nw;
  beforeEach(inject(function (_$nw_) {
    nw = _$nw_;
  }));

  it('should return nw.gui object', function () {
    expect(!!nw).toBe(true);
    expect(nw).toEqual(jasmine.any(Object));
  });

});
