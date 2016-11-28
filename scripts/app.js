(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.lunchMenu = "";
    $scope.yourLunch = "";

    $scope.checkifTooMuch = function () {
      var delimiter = ",";
      console.log('Lunch Menu Entry: '+$scope.lunchMenu);
      var menuItems = "";
      if($scope.lunchMenu == null || $scope.lunchMenu.length == 0){
          $scope.yourLunch = "Please enter data first";
      }else{
          menuItems = $scope.lunchMenu.split(delimiter);
          console.log('Menu Items Length: '+menuItems.length);
          if(menuItems.length == 0){
            $scope.yourLunch = "Please enter data first";
          }else if (menuItems.length > 0 && menuItems.length <= 3){
            $scope.yourLunch = "Enjoy!";
          }else{
            $scope.yourLunch = "Too much!";
          }
      }
    };
}
})();
