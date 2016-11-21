(function () {

    function productCtrl($scope, productFact, $rootScope) {
        /*  productSvc.counter()
              .then(function (response) {
              $scope.counter = response;
          }).catch(function(response){
              $scope.counter = response;
          });
          $scope.productList = productSvc.getProducts();*/
        $scope.recordCount = 4;
        productFact.getProductsFromApi()
            .then(function (res) {
                $scope.vehicles = res.data.vehicles;
            })
            .catch(function (errorResp) {
                $scope.showError = true;
            });

        $scope.addToCart = function (item) {
            item.selected = true;
            $rootScope.$broadcast("ITEM_ADDED", {
                product: item
            });
        };
        $scope.removeFromCart = function (item) {
            item.selected = false;
            $rootScope.$broadcast("ITEM_REMOVED", {
                product: item
            });


        };

        $scope.sortByPrice = function () {
            /*if($scope.orderByPrice=="Price"){
               $scope.orderByPrice="-Price"; 
            }
            else{
               $scope.orderByPrice="Price";  
            }*/

            $scope.orderByPrice = $scope.orderByPrice == "Price" ?
                "-Price" : "Price";
        };
        $scope.showMore = function () {
            $scope.recordCount += 4;
        };
        $scope.showLess = function () {
            if ($scope.recordCount > 4) {
                $scope.recordCount -= 4;
            }
        }
    }
    angular.module('product')
        .controller("productCtrl", ["$scope", "productFact", "$rootScope", productCtrl]);
})();
