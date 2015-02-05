'use strict';

angular.module('edLnkrApp')
  .controller('SpaceCtrl', ['$scope', '$state', 'planFactory','Auth',
    function ($scope, $state, planFactory, Auth) {

    $scope.getCurrentUser = Auth.getCurrentUser();
    $scope.plans = [];
    $scope.max = 5;
    $scope.alerts = [];
   // $scope.num =   ((plan.rating.score / plan.rating.num).toFixed(2))

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

    $scope.log = function(x){
      console.log(x);
    };

    planFactory.getPlans()
    .success(function(plans) {
      $scope.plans = plans;
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

      angular.element(document).ready(function () {
        window.setTimeout(function() {
          $(".alert").fadeTo(1500, 0).slideUp(500, function(){
            $(this).remove();
          });
        }, 5000);
      });

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
      };

    $scope.addRating = function(plan, num) {

      if (!plan.rating.id[$scope.getCurrentUser._id]) {
        plan.rating.id[$scope.getCurrentUser._id] = true;
        plan.rating.score += num;
        plan.rating.num += 1;
        planFactory.updatePlan (plan).success (
          function () {
            $scope.alerts.push ({type : 'success' , msg : 'Thank you for voting!'});
            angular.element(document).ready(function () {
              window.setTimeout(function() {
                $(".alert").fadeTo(1500, 0).slideUp(500, function(){
                  $scope.alerts.pop();
                });
              }, 5000);
            });

          }
        );

      } else {
        $scope.alerts.push ({type : 'danger' , msg : 'Sorry, we only allow one vote per person!'});
        angular.element(document).ready(function () {
          window.setTimeout(function() {
            $(".alert").fadeTo(1500, 0).slideUp(500, function(){
              $scope.alerts.pop();
            });
          }, 5000);
        });
      }
    };

  }]);
