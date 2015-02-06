'use strict';

angular.module('edLnkrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('space', {
        url: '/space',
        templateUrl: 'app/space/space.html',
        controller: 'SpaceCtrl',
        authenticate: false
      });
  });
