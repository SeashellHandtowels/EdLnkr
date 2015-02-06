'use strict';

angular.module('edLnkrApp')
  .factory('alertFade', [ function () {
    var alertFade = {};

   alertFade.alert = function(obj, type,msg){
     obj.alerts = [];

     obj.alerts.push ({type : type , msg: msg});
     angular.element(document).ready(function () {
       window.setTimeout(function() {
         $(".alert").fadeTo(1500, 0).slideUp(500, function(){
           obj.alerts.pop();
         });
       }, 5000);
     });

    };

    return alertFade;
  }]);
