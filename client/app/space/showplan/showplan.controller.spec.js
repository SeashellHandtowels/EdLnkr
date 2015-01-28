'use strict';

describe('Controller: ShowplanCtrl', function () {

  // load the controller's module
  beforeEach(module('edLnkrApp'));

  var ShowplanCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowplanCtrl = $controller('ShowplanCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
