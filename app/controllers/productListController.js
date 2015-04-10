app.controller("ProductListController", ["$scope", "$location", "$route", "ProductService", function ($scope, $location, $route, ProductService){
    $scope.totalQty = 0;
    $scope.totalPrice = 0;

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
        for (var i = 0; i < $scope.list.length; i++) {
            var item = $scope.list[i];
            if (item.checked) {
                $scope.totalQty = $scope.totalQty + item.qty;
                $scope.totalPrice = $scope.totalPrice + item.calculateTotal();
            }
        }
    };

    $scope.go = function(path) {
        $location.path(path);
    };
}]);
