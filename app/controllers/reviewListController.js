app.controller("ReviewListController", ["$scope", "$location", "ShoppingCart", function ($scope, $location, ShoppingCart){
    $scope.cart = ShoppingCart.shoppingList;

    $scope.go = function(path) {
        $location.path(path);
    };
}]);
