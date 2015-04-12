app.service('ShoppingCart', [function() {
    this.shoppingList = [];

    this.initializeList = function (items) {
        for (var i = 0 ; i < items.length; i++) {
            var item = items[i];
            item.qty = 0;
            item.calculateTotal = function() {
                return this.qty * this.price;
            }
            this.shoppingList.push(item);
        }
    }
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
