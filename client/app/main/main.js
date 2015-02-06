'use strict';

angular.module('edLnkrApp')
.config(function ($stateProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl',
      authenticate: false
    });
});
