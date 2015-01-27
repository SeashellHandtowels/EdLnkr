'use strict';

angular.module('edLnkrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('space', {
        url: '/space',
        templateUrl: 'app/space/space.html',
        controller: 'SpaceCtrl',
        authenticate: true
      })
    .state('create', {
      url: '/space/create',
      templateUrl: 'app/space/space_create.html',
      controller: 'SpaceCtrl',
      authenticate: true
    });

  });


  // angular.module('edLnkrApp')
  // .config(function ($stateProvider) {
  //   $stateProvider
  //     .state('login', {
  //       url: '/login',
  //       templateUrl: 'app/account/login/login.html',
  //       controller: 'LoginCtrl'
  //     })
  //     .state('signup', {
  //       url: '/signup',
  //       templateUrl: 'app/account/signup/signup.html',
  //       controller: 'SignupCtrl'
  //     })
  //     .state('settings', {
  //       url: '/settings',
  //       templateUrl: 'app/account/settings/settings.html',
  //       controller: 'SettingsCtrl',
  //       authenticate: true
  //     });
  // });