app.controller("ReviewListController", ["$scope", "$location", "ShoppingCart", function ($scope, $location, ShoppingCart){
    $scope.cart = ShoppingCart;

    $scope.confirmCart = function() {
        $scope.cart.shoppingList.length = 0; 
        $location.path('/success');
    }

}]);
