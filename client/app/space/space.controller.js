'use strict';

angular.module('edLnkrApp')
  .controller('SpaceCtrl', function ($scope, $http) {
    $scope.message = 'This is the space view.';
    $scope.plans = [];

    $http.get('/api/plans').success(function(plans) {
      $scope.plans = plans;
    });

    $scope.addPlan = function() {
      // if($scope.newThing === '') {
      //   return;
      // }
      // $http.post('/api/plans', { name: $scope.newThing });
      // $scope.newThing = '';
    };

    $scope.removePlan = function(plan) {
      $http.delete('/api/plans/' + plan._id);
    };
  });
