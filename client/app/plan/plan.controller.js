'use strict';

angular.module('edLnkrApp')
  .controller('PlanCtrl', ['$scope', 'Auth', 'planFactory', '$state', '$stateParams', 
    function ($scope, Auth, planFactory, $state, $stateParams) {

    planFactory.getPlan($stateParams.id)
    .success(function(plan) {
      $scope.plan = plan;
    })
    .error(function(err) {
      console.log('Something went wrong. Error: ' + err);
    });

  }]);
