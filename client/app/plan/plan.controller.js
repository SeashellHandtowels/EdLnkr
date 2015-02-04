'use strict';

angular.module('edLnkrApp')
  .controller('PlanCtrl', ['$scope', 'planFactory', '$state', '$stateParams',
    function ($scope, planFactory, $state, $stateParams) {

    planFactory.getPlan($stateParams.id)
    .success(function(plan) {
      $scope.plan = plan;
        console.log (JSON.stringify (plan));
        console.log('this is rating : '+plan.rating)
    })
    .error(function(err) {
      console.log('Something went wrong. Error: ' + err);
    });

    $scope.addLink = function() {
      $scope.plan.rating = 1;
      $scope.plan.links.push({index: '', url: '', description: ''});
    };

    $scope.removeLink = function(index) {
      $scope.plan.links.splice(index, 1);
    };

    $scope.updatePlan = function() {
      planFactory.updatePlan($scope.plan)
      .success(function(plan) {
        console.log('Plan saved', plan);
        $state.go('space');
      })
      .error(function(err) {
        console.log('Something went wrong. Error: ' + err);
      });
    };

    $scope.deletePlan = function() {
      planFactory.deletePlan($scope.plan._id)
      .success(function(plan) {
        console.log('Plan deleted.', plan);
        $state.go('space');
      })
      .error(function(err) {
        console.log('Something went wrong. Error: ' + err);
      });
    };

  }])
  .controller('PlanCreateCtrl', ['$scope', 'planFactory', '$state',
    function ($scope, planFactory, $state) {
    $scope.plan = {};
    $scope.plan.links = [];

    $scope.addLink = function() {
      $scope.plan.links.push({url: '', description: ''});
    };

    $scope.removeLink = function(index) {
      $scope.plan.links.splice(index, 1);
    };

    $scope.addPlan = function() {
      $scope.plan.rating = 1;
      planFactory.createPlan($scope.plan)
      .success(function(plan) {
        console.log('Plan created', plan);
        $state.go('space');
      })
      .error(function(err) {
        console.log('Something went wrong. Error: ' + err);
      });
    };

  }]);

