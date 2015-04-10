var app = angular.module("ShoppingCart", ['ngMockE2E', 'ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',
        {
            templateUrl: 'products.html'
        })
        .when('/review',
        {
            templateUrl: 'review.html'
        })
        .when('/success',
        {
            templateUrl: 'success.html'
        }
    )
});

