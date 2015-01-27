'use strict';

angular.module('edLnkrApp')
  .controller('SpaceCtrl', function ($scope, $http) {
    $scope.message = 'This is the space view.';
    $scope.plans = [];
    $scope.link = {
    //   url: '',
    //   description: ''
    };

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

    $scope.addPlan = function() {
      // if($scope.newThing === '') {
      //   return;
      // }
      // $http.post('/api/plans', { name: $scope.newThing });
      $scope.submitted = true;
      var plan = {
        title: $scope.title,
        user: $scope.user,
        synopsis: $scope.synopsis,
        links: $scope.links
      };

      if(form.$valid) {
        $http.post('/api/plans', plan)
        .success(function(data, status, headers, config) {
          console.log("Plan created successfully: " + data);
        })
        .error(function(data, status, headers, config) {
          console.log("There was an error when creating the plan: " + data);
        });
      }
      // $scope.newThing = '';
    };

    $scope.removePlan = function(plan) {
      $http.delete('/api/plans/' + plan._id);
    };
  });
