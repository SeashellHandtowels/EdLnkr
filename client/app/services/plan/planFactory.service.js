'use strict';

angular.module('edLnkrApp')
  .factory('planFactory', ['$http', function ($http) {
    var planFactory = {};
    var baseUrl = 'http://localhost:9000/api/plans';
    // var baseUrl = 'https://edlnkr.herokuapp.com/api/plans';

    planFactory.getPlans = function() {
      return $http.get(baseUrl);
    };

    planFactory.getPlan = function(id) {
      return $http.get(baseUrl + '/' + id);
    };

    planFactory.createPlan = function(plan) {
      return $http.post(baseUrl, plan);
    };

    planFactory.updatePlan = function(plan) {
      $http.patch(baseUrl + '/' + plan.id, plan);
    };

    planFactory.deletePlan = function(id) {
      $http.remove(baseUrl + '/' + id);
    };

    return planFactory;
  }]);
