describe("Get all", function() {
    var url = '/api/';
    var productos = [
        {name: 'Chocolate', price: 10},
        {name: 'Papel Higienico', price: 9},
        {name: 'Crema', price: 7},
    ];
    var $httpMock = undefined;
    
    beforeEach(module('app'));
    
    beforeEach(inject(function($httpBackend) {
        $httpMock = $httpBackend;
        $httpBackend.when('GET', url).respond(productos);
    }));
    
    it('get all', inject(function(productosApi) {
        $httpMock.expectGET(url);
        productosApi.getAll(function(mercancia) {
            expect(mercancia).toEqual(productos);
        });
        $httpMock.flush();
    }));
});