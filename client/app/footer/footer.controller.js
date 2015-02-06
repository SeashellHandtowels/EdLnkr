'use strict';

angular.module('edLnkrApp')
  .controller('footerCtrl', ['$scope', '$state', 'planFactory',
    function ($scope, $state, planFactory) {
      $scope.featuredPlans = [];
      planFactory.getPlans()
      .success(function(featuredPlans) {
        $scope.featuredPlans = featuredPlans;
      })
      .error(function(err) {
        console.log('Something went wrong. Error: ' + err);
      });
    }
  ]);
