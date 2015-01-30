'use strict';

angular.module('edLnkrApp')
  .controller('SpaceCtrl', ['$scope', '$http', '$rootScope', '$state', 'Auth', function ($scope, $http, $rootScope, $state, Auth) {
    $scope.plans = [];
    $scope.link = {};
    $scope.planLinks = [];
    $scope.user = Auth.getCurrentUser();

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
        user: $scope.user._id,
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

    $scope.editLinkUrl = function(link){
      $scope.link = link;
    };

    $scope.addAnotherLinkInEdit = function(){
      var l = $scope.link;
      var _id = l._id;
      var links = $rootScope.plan.links;
      var found = false;
      if ($scope.link.url){
        for (var i = 0, le = links.length; i < le; i += 1) {
          if (links[i]._id === _id) {
            links[i].url = l.url;
            links[i].description = l.description;
            found = true;
          }
        }
        if (!found) {
          links.push(l);
        }
      }
      $scope.link = {};
    };

    $scope.removeLink = function(link) {
      var _id = link._id;
      var links = $rootScope.plan.links;
      for (var i = 0, l = links.length; i < l; i += 1) {
        if (links[i]._id === _id) {
          links.splice(i, 1);
          break;
        }
      }
      $state.go($state.current, {}, {reload: true});
    };

    $scope.submitEditPlan = function() {

      $scope.submitted = true;
      if($rootScope.plan.title === undefined) {
        return;
      }

      $scope.addAnotherLinkInEdit();

      var plan = {
        title: $rootScope.plan.title,
        user: $scope.user._id,
        synopsis: $rootScope.plan.synopsis,
        links: $rootScope.plan.links
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
