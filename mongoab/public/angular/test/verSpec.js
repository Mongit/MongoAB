describe('Ver Controller', function() {
    var url = '/api/';
    var id = 1;
    var productos = [
        {name: 'Chocolate', price: 10, id: 1, _id: id},
        {name: 'Papel', price: 9, id:2},
        {name: 'Crema', price: 7, id:3}
    ];
    
    beforeEach(module('app'));
    
    var $httpMock, $controller;
    
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));
    
    beforeEach(inject(function($httpBackend) {
        $httpMock = $httpBackend;
        $httpBackend.when("GET", url + id).respond(productos[0]);
    }));
    
    beforeEach(inject(function($routeParams) {
        $routeParams.id = id;
    }));
    
    it('Loads product on controller instantiation', function() {
        var controller = $controller('VerController');
        controller.name = 'Chocolate';
        controller.price = 10;
        controller.id = id;
        
        $httpMock.expectGET(url + id);
        $httpMock.flush();
        
        expect(controller.name).toEqual(productos[0].name);   expect(controller.price).toEqual(productos[0].price);   expect(controller.id).toEqual(id);
        
        });
});