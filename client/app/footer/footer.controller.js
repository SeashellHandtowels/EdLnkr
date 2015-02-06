'use strict';

angular.module('edLnkrApp')
  .controller('footerCtrl', ['$scope', '$state', 'planFactory', 'Auth',
    function ($scope, $state, planFactory, Auth) {
      $scope.featuredPlans = [];

      $scope.isLoggedIn = Auth.isLoggedIn;
      $scope.getCurrentUser = Auth.getCurrentUser();

      planFactory.getPlans()
      .success(function(featuredPlans) {
        $scope.featuredPlans = featuredPlans;
      })
      .error(function(err) {
        console.log('Something went wrong. Error: ' + err);
      });

      $scope.incrementCount = function(plan) {
        if (Auth.isLoggedIn ()) {
          if (!plan.views.id[$scope.getCurrentUser._id]) {
            plan.views.id[$scope.getCurrentUser._id] = true;
            plan.views.count += 1;
            planFactory.updatePlan (plan);
          }
        }
      };
    }

  ]);
