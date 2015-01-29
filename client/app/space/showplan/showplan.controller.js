'use strict';

angular.module('edLnkrApp')
  .controller('ShowplanCtrl', [ '$scope', '$http', '$rootScope', '$state', function ($scope, $http, $rootScope, $state) {
    $scope.message = 'This is the showplan view';

    $http.get('/api/plans/'+ $state.params.planId).success(function(plan) {
      $scope.plan = plan;
      console.log(plan);
      console.log($state);
    });

    // $scope.plan = {
    //   title: 'Learn Angular',
    //   synopsis: 'These are bookmarks to learn angular',
    //   links: [{
    //     url: 'https://thinkster.io/angulartutorial/a-better-way-to-learn-angularjs/',
    //     description: "A Better Way to Learn AngularJS"
    //   }, {
    //     url: 'http://learn-angular.org/',
    //     description: 'Learn AngularJS with free interactive lessons'
    //   }, {
    //     url: 'https://angularjs.org/',
    //     description: 'AngularJS by Google'
    //   }, {
    //     url: 'http://www.w3schools.com/angular/',
    //     description: 'AngularJS Tutorial'
    //   }, {
    //     url: 'http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro',
    //     description: 'Learn to build an application using Angular.js'
    //   }, {
    //     url: 'https://www.codeschool.com/courses/shaping-up-with-angular-js',
    //     description: 'Shaping Up With Angular.JS'
    //   }, {
    //     url: 'http://www.ng-newsletter.com/posts/how-to-learn-angular.html',
    //     description: 'How to Learn AngularJS - Your AngularJS Sherpa'
    //   }
    //   ],
    //   //user: user._id
    // };

  }]);
