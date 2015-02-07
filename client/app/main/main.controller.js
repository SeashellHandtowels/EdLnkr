'use strict';

angular.module('edLnkrApp')
  .controller('MainCtrl', ['$scope', '$state', 'planFactory','Auth', 'alertFade','$rootScope',
    function ($scope, $state, planFactory, Auth, alertFade, $rootScope) {

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser();
    $scope.plans = [];
    $scope.max = 5;
    $scope.closedLanding = function(){
      $rootScope.closedLanding =  $rootScope.closedLanding || false;
      return $rootScope.closedLanding;
    };

    $scope.greaterThan = function(value){
      return function(plan){

        if(value === undefined ){
          value = 0;
        }

        var numerator = plan.rating.score;
        var denominator = plan.rating.num;
        var crazyNum = (numerator / denominator).toFixed(2);

        if(crazyNum > value){
          return true;
        }
      };
    };

    $scope.hoveringOver = function(value){
      $scope.overStar = value;
    };

    planFactory.getPlans()
    .success(function(plans) {
        //intercept plans
        plans.forEach(function(plan){
          var numerator = plan.rating.score;
          var denominator = plan.rating.num;
          plan.rating.avg = Math.round(numerator / denominator);
        });
        //iterate over plans
        //create plans[i].avg = plans[i].score / plans[i].num
      $scope.plans = plans;
    })
    .error(function(err) {
      console.log('Something went wrong. Error: ' + err);
    });

    $scope.deletePlan = function(plan) {
      if(Auth.isLoggedIn()) {
        planFactory.deletePlan (plan._id)
          .success (function (plan) {
            console.log ('Plan deleted.' , plan);
            $state.go ($state.current , {} , {reload : true});
          })
          .error (function (err) {
            console.log ('Something went wrong. Error: ' + err);
          });
      } else{
        alertFade.alert($scope, 'danger', 'You must be logged in!');
      }
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
      };

    $scope.addRating = function(plan, num) {
      if(Auth.isLoggedIn()) {
        if(!plan.rating.id[$scope.getCurrentUser._id]) {
          plan.rating.id[$scope.getCurrentUser._id] = true;
          plan.rating.score += num;
          plan.rating.num += 1;
          planFactory.updatePlan(plan).success(
            function() {
              alertFade.alert($scope, 'success', 'Thank you for voting!');
            }
          );

        } else {
          alertFade.alert($scope, 'danger', 'Sorry, we only allow one vote per person!');
        }
      } else {
        alertFade.alert($scope, 'danger', 'You must be logged in!');
      }
    };

    $scope.hideLandingPage = function() {
      $rootScope.closedLanding = true;
    }

    }]);
