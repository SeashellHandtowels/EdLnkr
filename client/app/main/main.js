'use strict';

angular.module('edLnkrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });
angular.module('ui.bootstrap.carousel').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 10000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 800 + slides.length + 1;
    slides.push({
      image: '../../assets/images/books.jpg' //+ newWidth
      //text: ['Our app is cool!','Tons of features','Gorgeous Interface','Teach stuff'][slides.length % 4]
    });
  };
  for (var i=0; i<1; i++) {
    $scope.addSlide();
  }
});
