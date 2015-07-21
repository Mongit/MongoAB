describe("IndexController", function() {
    var url = '/api/';
    var id = 1;
    var productos = [
        {name: 'Chocolate', price: 10, id: 1},
        {name: 'Papel higienico', price: 9, id: 2},
        {name: 'Crema', price: 7, id: 3}
    ];
    var $httpMock = undefined;
    var $locationCaptured; 
    
    beforeEach(module('app'));
    
    beforeEach(inject(function($location) {
        $locationCaptured = $location;
    }));
    
    beforeEach(inject(function($httpBackend) {
        $httpMock = $httpBackend;
        $httpBackend.when('GET', url).respond(productos);
    }));
    
    it('get all', inject(function(productosApi) {
        $httpMock.expectGET(url);
        productosApi.getAll(function(mercancia) {
            expect(mercancia).toEqual(productos);
        });
        //$httpMock.flush();
    }));
    
    it('delete', inject(function(productosApi) {
        $httpMock.expectDELETE(url);
        productosApi.delete(id, function() {
            expect($locationCaptured.path()).toBe('/');
        });
    }));
});