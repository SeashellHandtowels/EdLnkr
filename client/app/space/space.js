'use strict';

angular.module('edLnkrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('space', {
        url: '/space',
        templateUrl: 'app/space/space.html',
        controller: 'SpaceCtrl',
        authenticate: true
      })
      .state('create', {
        url: '/create',
        templateUrl: 'app/space/create.html',
        controller: 'SpaceCtrl',
        authenticate: true
      })
      .state('edit', {
        url: '/edit',
        templateUrl: 'app/space/edit.html',
        controller: 'SpaceCtrl',
        authenticate: true
      });
  });
