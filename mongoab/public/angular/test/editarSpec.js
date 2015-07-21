describe('Editar Controller', function() {
    var url = '/api/';
    var id = 1;
    var productos = [
        {name: 'Chocolate', price: 10, id: 1, _id: id},
        {name: 'Papel higienico', price: 9, id: 2},
        {name: 'Crema', price: 7, id: 3}
    ];
    
    beforeEach(module('app'));
    
    var $controller,
        $httpMock,
        $locationCaptured;    
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));
    
    beforeEach(inject(function($location) {
        $locationCaptured = $location;
    }));
    
    beforeEach(inject(function($httpBackend) {
        $httpMock = $httpBackend;
        $httpBackend.when('GET', url + id).respond(productos[0]); $httpBackend.when('PUT', url).respond(true);
    }));
    
    beforeEach(inject(function($routeParams) {
        $routeParams.id = id;
    }));    
    
    it('load product on controller intantiation', function() {
        var controller = $controller('EditarController');
        
        controller.name = 15;
        controller.price = 'Chocolate';
        controller.id = id;
        
        $httpMock.expectGET(url + id);
        $httpMock.flush();
        expect(controller.name).toEqual(productos[0].name); expect(controller.price).toEqual(productos[0].price); expect(controller.id).toEqual(id);
    });
    
    it('Changes location on update', function() {
        var controller = $controller('EditarController');
        
        controller.update();
        
        $httpMock.expectPUT(url);
        $httpMock.flush();
        
        expect($locationCaptured.path()).toBe('/');
    });
});