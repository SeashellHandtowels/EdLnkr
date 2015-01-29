'use strict';

angular.module('edLnkrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('showplan', {
        url: '/showplan/:planId',
        templateUrl: 'app/space/showplan/showplan.html',
        controller: 'ShowplanCtrl'
      });
  });