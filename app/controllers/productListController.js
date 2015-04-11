app.controller("ProductListController", ["$scope", "$location", "$route", "ProductService", "ShoppingCart", function ($scope, $location, $route, ProductService, ShoppingCart){
    $scope.totalQty = 0;
    $scope.totalPrice = 0;
    $scope.cart = ShoppingCart;

    var listPromise = ProductService.getList();

    listPromise.success(function (list) {
        for (var i = 0 ; i < list.length; i++) {
            list[i].qty = 0;
            list[i].calculateTotal = function() {
                return this.qty * this.price;
            }
        }
        $scope.list = list;
    });

    $scope.updateCart = function(){
        $scope.totalQty = $scope.cart.totalQty($scope.list);
        $scope.totalPrice = $scope.cart.totalPrice($scope.list);
        $scope.cart.updateList($scope.list);
    };

    $scope.go = function(path) {
        $location.path(path);
    };
}]);
