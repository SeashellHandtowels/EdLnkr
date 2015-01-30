'use strict';

angular.module('edLnkrApp')
  .controller('ShowplanCtrl', [ '$scope', '$http', '$rootScope', '$state', function ($scope, $http, $rootScope, $state) {
    $scope.message = 'This is the showplan view';

    $http.get('/api/plans/'+ $state.params.planId).success(function(plan) {
      $scope.plan = plan;
    });

  }]);
