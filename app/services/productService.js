app.service('ProductService', ['$http', '$q', function($http, $q) {
    this.getList = function () {
        return $http.get('/product-list');
    };
}]);

