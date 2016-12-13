(function () {
    'use strict';

    angular.module('TooMuchApp', [])
    .controller('TooMuchController', TooMuchController)
    //Making dependecy minification safe
    TooMuchController.$inject = ['$scope'];

    function TooMuchController($scope) {
        //Set the text box ItemsValue to blank at the begining
        $scope.ItemsValue = "";
        //Property sets the message if eatable items are too much
        $scope.CheckTooMuch = function () {
            $scope.Message = EvaulateEatableItems($scope.ItemsValue);
        };
    }

    //function checks the is the values are too much to eat
    function EvaulateEatableItems(value) {
        var listofItems = value.split(",");

        // checks if plate has something on it
        if (listofItems == "undefined" || listofItems == null)
            return "your plate is empty";

        //Validates if there is invalid input
        for (var i = 0; i < listofItems.length; i++) {
            if(listofItems[i].trim() == "")
                return "Food is expired, don't eat!";
        }

        //Checkes items count
        if( listofItems.length <= 3)
            return "Enjoy!";
        else
            return "Too much!";
    }

})();
