describe("Productos Api Test", function() {
    var url = '/api/';
    var id = 1;
    var productos = [
        {name: 'Chocolate', price: 10, id: 1},
        {name: 'Papel Higienico', price: 9, id: 2},
        {name: 'Crema', price: 7, id: 3},
    ];
    
    var $httpMock = undefined;
    
    beforeEach(module('app'));
    
    beforeEach(inject(function($httpBackend) {
        $httpMock = $httpBackend;
        $httpBackend.when('GET', url).respond(productos);
        $httpBackend.when('GET', url + id). respond(productos[0]);
        $httpBackend.when('POST', url).respond(true);
        $httpBackend.when('PUT', url).respond(true);
        $httpBackend.when('DELETE', url + id).respond(false);
    }));
    
    it('gets all', inject(function(productosApi) {
        
        $httpMock.expectGET(url);
        productosApi.getAll(function(mercancia) {
            expect(mercancia).toEqual(productos);
        });
        $httpMock.flush();
    }));
    
    it('gets one', inject(function(productosApi) {
        
        $httpMock.expectGET(url + id);
        productosApi.getOne(id, function(mercancia) {
            expect(mercancia).toEqual(productos[0]);
        });
        $httpMock.flush();
    }));
    
    it('Saves', inject(function(productosApi) {
        $httpMock.expectPOST(url);
        productosApi.save(productos[1],function(result) {
            expect(result).toBe(true);
        });
        $httpMock.flush();
    }));
    
    it('Updates', inject(function(productosApi) {
        
        $httpMock.expectPUT(url);
        productosApi.update(productos[1], function(result) {
            expect(result).toBe(true);
        });
        $httpMock.flush();
    }));
    
    it('delete one', inject(function(productosApi) {
        $httpMock.expectDELETE(url + id);
        productosApi.delete(id, function(result) {
            expect(result).toEqual(false);
        });
        $httpMock.flush();
    }));
    
});