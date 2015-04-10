app.controller("ReviewListController", ["$scope", "$location", "ShoppingCart", function ($scope, $location, ShoppingCart){
    $scope.cart = ShoppingCart;

    $scope.go = function(path) {
        $location.path(path);
    };
}]);
