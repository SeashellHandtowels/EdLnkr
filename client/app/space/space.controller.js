'use strict';

angular.module('edLnkrApp')
  .controller('SpaceCtrl', ['$scope', '$http', '$rootScope', '$state', function ($scope, $http, $rootScope, $state) {
    $scope.message = 'This is the space view.';
    $scope.plans = [];
    $scope.planLinks = [];
    $scope.link = {};

    $http.get('/api/plans').success(function(plans) {
      $scope.plans = plans;
    });

    $scope.addAnotherLink = function(){
      var link = {
        url: $scope.link.url,
        description: $scope.link.description
      };
      $scope.planLinks.push(link);
      $scope.link = {};
    };

    $scope.addPlan = function() {
      $scope.submitted = true;
      if($scope.title === undefined) {
        return;
      }

      var plan = {
        title: $scope.title,
        user: $rootScope.user._id,
        synopsis: $scope.synopsis,
        links: $scope.planLinks
      };

      $http.post('/api/plans', plan)
      .success(function(data) {
        console.log('Plan created successfully: ' + data);
        $state.go('space');
      })
      .error(function(data) {
        console.log('There was an error when creating the plan: ' + data);
      });
    };

    $scope.removePlan = function(plan) {
      $http.delete('/api/plans/' + plan._id);
    };
  }]);
