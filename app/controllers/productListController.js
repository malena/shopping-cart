app.controller("ProductListController", ["$scope", "$location", "$route", "ShoppingCart", function ($scope, $location, $route, shoppingCart){

    $scope.updateCart = function(){
        $scope.totalQty = shoppingCart.totalQty();
        $scope.totalPrice = shoppingCart.totalPrice();
    };

    $scope.checkCart = function (){
        if($scope.totalQty > 0) {
            $location.path('/review');
        } 
        else {
            return;
        }
    }

    shoppingCart.getItems().then(function (items) {
        $scope.items = items;
        $scope.updateCart();
    }).catch(function (error) {
        console.error(error);
    });

}]);
