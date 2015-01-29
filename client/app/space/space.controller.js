'use strict';

angular.module('edLnkrApp')
  .controller('SpaceCtrl', ['$scope', '$http', '$rootScope', '$state', function ($scope, $http, $rootScope, $state) {
    $scope.message = 'This is the space view.';
    $scope.plans = [];
    $scope.link = {};
    $scope.planLinks = [];
    
    $http.get('/api/plans').success(function(plans) {
      $scope.plans = plans;
    });

    $scope.addAnotherLink = function(){
      if ($scope.link.url){
        var link = {
          url: $scope.link.url,
          description: $scope.link.description
        };
        $scope.planLinks.push(link);
        $scope.link = {};
      }
    };

    $scope.addPlan = function() {
      $scope.submitted = true;
      if($scope.title === undefined) {
        return;
      }

      $scope.addAnotherLink();
      
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

    $scope.editPlan = function(plan) {
      $rootScope.plan = plan;
      $state.go('edit');
    };

    $scope.submitEditPlan = function(form) {
      console.log("in submitEditPlan");
      $scope.submitted = true;
      if($rootScope.plan.title === undefined) {
        return;
      }

      $scope.addAnotherLink();
      
      var plan = {
        title: $rootScope.plan.title,
        user: $rootScope.user._id,
        synopsis: $rootScope.plan.synopsis,
        links: $rootScope.plan.planLinks
      };

      $http.put('/api/plans/' + $rootScope.plan._id, plan)
      .success(function(data) {
        console.log('Plan updated successfully: ' + data);
        $state.go('space');
      })
      .error(function(data) {
        console.log('There was an error when updating the plan: ' + data);
      });
    };

    $scope.removePlan = function(plan) {
      $http.delete('/api/plans/' + plan._id);
      $state.go($state.current, {}, {reload: true}); 
    };
  }]);
