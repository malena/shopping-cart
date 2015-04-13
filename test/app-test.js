app.run(function($httpBackend) {
    var shoppingList = [];
    var productList = [
        {
            'id': '001', 
            'name': 'To Kill a Mockingbird',
            'price': 20.00
        },
        {
            'id': '002', 
            'name': 'The Lord of the Rings', 
            'price': 30.00
        },
        {
            'id': '003', 
            'name': 'Beloved', 
            'price': 30.00
        },
        {
            'id': '004', 
            'name': 'The Grapes of Wrath',
            'price': 20.00
        },
        {
            'id': '005', 
            'name': 'The Great Gatsby', 
            'price': 30.00
        },
        {
            'id': '006', 
            'name': 'Ulysses', 
            'price': 30.00
        },
        {
            'id': '007', 
            'name': 'Harry Potter', 
            'price': 30.00
        },
        {
            'id': '008', 
            'name': 'The Hunger Games', 
            'price': 30.00
        }

    ];

    $httpBackend.whenGET(/\.html$/).passThrough();
    $httpBackend.whenGET('/product-list').respond(productList);
    $httpBackend.whenPOST('/shopping-list').respond(function(method, url, data, headers){
        console.log('Received these data:', method, url, data, headers);
        shoppingList.push(angular.fromJson(data));       
        return[200, {}, {}];
    });

});
