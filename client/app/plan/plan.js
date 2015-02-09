'use strict';

angular.module('edLnkrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('newPlan', {
        url: '/plan/new',
        templateUrl: 'app/plan/create.html',
        controller: 'PlanCreateCtrl',
        authenticate: true
      })
      .state('viewPlan', {
        url: '/plan/:id',
        templateUrl: 'app/plan/show.html',
        controller: 'PlanCtrl',
        authenticate: false
      })
      .state('editPlan', {
        url: '/plan/edit/:id',
        templateUrl: 'app/plan/edit.html',
        controller: 'PlanCtrl',
        authenticate: true
      });
  });
