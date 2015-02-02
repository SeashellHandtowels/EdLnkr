'use strict';

angular.module('edLnkrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('plan', {
        url: '/plan/:id',
        templateUrl: 'app/plan/plan.html',
        controller: 'PlanCtrl',
        authenticate: true
      });
    $stateProvider
      .state('plan.edit', {
        url: '/plan/edit/:id',
        templateUrl: 'app/plan/edit.html',
        controller: 'PlanCtrl',
        authenticate: true
      });
    $stateProvider
      .state('plan.create', {
        url: '/plan/create',
        templateUrl: 'app/plan/create.html',
        controller: 'PlanCtrl',
        authenticate: true
      });
  });