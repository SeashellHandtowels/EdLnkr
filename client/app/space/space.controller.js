'use strict';

angular.module('edLnkrApp')
  .controller('SpaceCtrl', ['$scope', '$state', 'planFactory','Auth',
    function ($scope, $state, planFactory, Auth) {

    $scope.getCurrentUser = Auth.getCurrentUser();
    $scope.plans = [];
    $scope.max = 5;
    $scope.num = '';

    $scope.hoveringOver = function(value){
      $scope.overStar = value;
    };

    $scope.log = function(x){
      console.log(x);
    };

    planFactory.getPlans()
    .success(function(plans) {
      $scope.plans = plans;
        console.log("this is plans from getPlans: "+plans);
    })
    .error(function(err) {
      console.log('Something went wrong. Error: ' + err);
    });

    $scope.deletePlan = function(plan) {
      planFactory.deletePlan(plan._id)
      .success(function(plan) {
        console.log('Plan deleted.', plan);
        $state.go($state.current, {}, {reload: true});
      })
      .error(function(err) {
        console.log('Something went wrong. Error: ' + err);
      });
    };

      $scope.addRating = function(plan, num){

       if(!plan.rating.id[$scope.getCurrentUser._id]){
          plan.rating.id[$scope.getCurrentUser._id] = true;
          plan.rating.score += num;
          plan.rating.num += 1;
          planFactory.updatePlan(plan).success(
            function(){
              console.log('you have voted')
            }
          );

       }else{
          console.log('you have already voted');
       }



      };

  }]);
