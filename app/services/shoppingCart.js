app.service('ShoppingCart', ['$http', '$q', function ($http, $q) {
    this.shoppingList = [];

    this.getItems = function () {
        var self = this;

        return $q(function (resolve, reject) {
            if (self.shoppingList.length > 0) {
                resolve(self.shoppingList);
                return;
            }

            $http.get('/product-list').success(function (products) {
                for (var i = 0 ; i < products.length; i++) {
                    var item = products[i];
                    item.qty = 0;
                    item.calculateTotal = function() {
                        return this.qty * this.price;
                    }
                    self.shoppingList.push(item);
                }
                resolve(self.shoppingList);
            }).error(function () {
                reject('Could not load products');
            });
        });
    };
    this.postItems = function(){
        var self = this;
        $http.post('/shopping-list', self.shoppingList).success(function(){
            self.shoppingList.length = 0;
        });
    };
    this.checkedItems = function () {
        var checked = [];
        for (var i = 0; i < this.shoppingList.length; i++) {
            var item = this.shoppingList[i];
            if (item.checked) {
                checked.push(item);
            }
        }
        return checked;
    };
    this.totalQty = function () {
        var totalQty = 0;
        var checked = this.checkedItems();
        for (var i = 0; i < checked.length; i++) {
            totalQty += checked[i].qty;
        }
        return totalQty;
    };
    this.totalPrice = function () {
        var totalPrice = 0;
        var checked = this.checkedItems();
        for (var i = 0; i < checked.length; i++) {
            totalPrice += checked[i].calculateTotal();
        }
        return totalPrice;
    };
}]);
