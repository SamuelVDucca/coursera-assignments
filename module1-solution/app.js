( function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope']; //protects from minification

function LunchController($scope)
{
    $scope.food = "";
    $scope.message = "";
    $scope.placeholder = "List comma separated dishes you usually have for lunch";


    $scope.checkTooMuch = function () 
    {
        if ($scope.food == "") 
        {
            $scope.message = "Please enter data first";
        }
        else 
        {
            var parsedFood = $scope.food.split(','); //separates food string in every comma

            if (parsedFood.length <= 3)
            {
                $scope.message = "Enjoy!";
            }
            else
            {
                $scope.message = "Too much!";
            }

        }

    };

}


})();