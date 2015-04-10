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

    $scope.updateCart = function() {
        $scope.totalQty = 0;
        $scope.totalPrice = 0;
        $scope.cart.length = 0;

        for (var i = 0; i < $scope.list.length; i++) {
            var item = $scope.list[i];
            if (item.checked) {
                $scope.totalQty = $scope.totalQty + item.qty;
                $scope.totalPrice = $scope.totalPrice + item.calculateTotal();

                if(item.qty > 0) {
                    if(item.checked == true){
                        $scope.cart.push(item);
                    } else {
                        $scope.cart.length = 0;
                        $scope.cart.push(item);
                    }
                }
            }
        }
    };

    $scope.go = function(path) {
        $location.path(path);
    };
}]);
