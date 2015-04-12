app.controller("ProductListController", ["$scope", "$location", "$route", "ProductService", "ShoppingCart", function ($scope, $location, $route, ProductService, ShoppingCart){
    if (ShoppingCart.shoppingList.length === 0) {
        var listPromise = ProductService.getList();
        listPromise.success(function (list) {
            if ($scope.cart.shoppingList.length === 0) {
                $scope.cart.initializeList(list);
            }
        });
    }

    $scope.cart = ShoppingCart;
    $scope.totalQty = ShoppingCart.totalQty();
    $scope.totalPrice = ShoppingCart.totalPrice();

    $scope.updateCart = function(){
        $scope.totalQty = $scope.cart.totalQty();
        $scope.totalPrice = $scope.cart.totalPrice();
    };

    $scope.go = function(path) {
        $location.path(path);
    };
}]);
