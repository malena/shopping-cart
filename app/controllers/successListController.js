app.controller("SuccessListController", ["$scope", "$location", "ShoppingCart", function ($scope, $location, ShoppingCart){
    $scope.cart = ShoppingCart;

    $scope.go = function(path) {
        $location.path(path);
    };

    $scope.confirmationNumber = ShoppingCart.confirmationNumber;
}]);
