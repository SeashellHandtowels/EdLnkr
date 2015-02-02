'use strict';

angular.module('edLnkrApp')
  .controller('SpaceCtrl', ['$scope', '$state', 'planFactory', 
    function ($scope, $state, planFactory) {
      
    $scope.plans = [];

    planFactory.getPlans()
    .success(function(plans) {
      console.log('Plans are loaded');
      $scope.plans = plans;
    })
    .error(function(err) {
      console.log('Something went wrong. Error: ' + err);
    });

    $scope.deletePlan = function(plan) {
      planFactory.deletePlan(plan._id)
      .success(function(plan) {
        console.log('Plan deleted.', plan);
        $state.go($state.current, {}, {reload: true});
      })
      .error(function(err) {
        console.log('Something went wrong. Error: ' + err);
      });
    };

  }]);
