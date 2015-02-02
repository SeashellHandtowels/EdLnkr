'use strict';

describe('Service: plan', function () {

  // load the service's module
  beforeEach(module('edLnkrApp'));

  // instantiate service
  var plan;
  beforeEach(inject(function (_plan_) {
    plan = _plan_;
  }));

  it('should do something', function () {
    expect(!!plan).toBe(true);
  });

});
