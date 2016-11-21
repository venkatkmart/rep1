(function () {
    function headerCtrl($scope, lookupSvc) {
        $scope.cartItems = 0;
        //$scope.navItems =["Home","Login","Register"];
        $scope.navItems = lookupSvc.getNavItems();
        $scope.brandName = "FlipSnap";
        $scope.headerUrl = "app/header/header.html";


        $scope.loadPage = function (data) {
            // console.log(kiran);
            $scope.contentUrl = data.templateUrl;
        };

        $scope.$on("ITEM_ADDED", function (evt, args) {
            console.log(args);
            $scope.cartItems++;
        });

        $scope.$on("ITEM_REMOVED", function (evt, args) {
            console.log(args);
            $scope.cartItems--;
        });


    };


    angular.module("header").controller("headerCtrl", headerCtrl);

})();
