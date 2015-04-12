app.controller("SuccessListController", ["$scope", "$location", "ShoppingCart", function ($scope, $location, ShoppingCart){
    $scope.cart = ShoppingCart;

    $scope.go = function(path) {
        $location.path(path);
    };

    $scope.totalPrice = $scope.cart.totalPrice(ShoppingCart.shoppingList);

    $scope.confirmationNumber = $scope.cart.confirmationNumber();
}]);
