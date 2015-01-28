'use strict';

angular.module('edLnkrApp')
  .controller('SpaceCtrl', function ($scope, $http, $rootScope) {
    $scope.message = 'This is the space view.';
    $scope.plans = [];
    $scope.link = {};

    $http.get('/api/plans').success(function(plans) {
      $scope.plans = plans;
    });

    $scope.addAnotherLink = function(){
      $scope.planLinks = $scope.planLinks || [];
      var link = {
        url: $scope.link.url,
        description: $scope.link.description
      };
      $scope.planLinks.push(link);
      $scope.link = {};
    };

    $scope.addPlan = function(form) {
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
      .success(function(data, status, headers, config) {
        console.log('Plan created successfully: ' + data);
      })
      .error(function(data, status, headers, config) {
        console.log('There was an error when creating the plan: " + data);
      });
    };

    $scope.removePlan = function(plan) {
      $http.delete('/api/plans/' + plan._id);
    };
  });
