app.service('ShoppingCart', [function() {
    this.totalQty = function (list){
        var totalQty = 0;
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            if (item.checked) {
                totalQty = totalQty + item.qty;
            }
        }
        return totalQty;
    };
    this.totalPrice = function(list){
        var totalPrice = 0;
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            if (item.checked) {
                totalPrice = totalPrice + item.calculateTotal();
            }
        }
        return totalPrice;
    };
    this.updateList = function(list){
        this.shoppingList.length = 0;
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            if (item.checked && item.qty > 0) {
                this.shoppingList.push(item);
            }
        }
    };
    this.shoppingList = [];
}]);