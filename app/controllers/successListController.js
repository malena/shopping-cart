app.controller("SuccessListController", ["$scope", "$location", "ShoppingCart", function ($scope, $location, ShoppingCart){
    $scope.cart = ShoppingCart;

    $scope.go = function(path) {
        $scope.cart.shoppingList.length = 0; 
        $location.path(path);
    };

    $scope.confirmationNumber = '909000';
}]);
