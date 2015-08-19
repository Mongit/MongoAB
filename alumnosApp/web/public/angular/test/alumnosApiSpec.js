describe("Alumnos Api ", function() {
    var url = '/alumnos/api/';
    var id = 1;
    var alumnos = [
        {nombre: 'Jonas', calificacion: 9},
        {nombre: 'Rodrigo', calificacion: 8},
        {nombre: 'Monserrat', calificacion: 7}
    ];
    var $httpMock = undefined;
    var api = undefined;
    var logMock = undefined;
    var putHandler = undefined; 
    
    beforeEach(module('app'));
    
    beforeEach(inject(function($httpBackend, alumnosApi, $log) {
        
        $httpMock = $httpBackend;
        
        logMock = $log;
        
        api = alumnosApi;
        $httpBackend.when('GET', url).respond(alumnos);
        $httpBackend.when('GET', url + id).respond(alumnos[0]); 
        $httpBackend.when('POST', url).respond(true);
        putHandler = $httpBackend.when('PUT', url).respond(true);
        $httpBackend.when('DELETE', url + id).respond(false);
    
    }));
    
    it('gets all', function() {
        $httpMock.expectGET(url);
        api.getAll(function(data) {                
            expect(data).toEqual(alumnos);
        });
        $httpMock.flush();    
    });
    
    it('gets one', function() {
        api.getOne(id, function(data) {                
            expect(data).toEqual(alumnos[0]);
        });
        $httpMock.expectGET(url + id);
        $httpMock.flush();
    });
    
    it('saves', function() {
        
        $httpMock.expectPOST(url);
        api.save(alumnos[1], function(result) {                
            expect(result).toBe(true);
        });
        $httpMock.flush();
        
    });
    
    it('updates', function() {
        
        $httpMock.expectPUT(url);
        api.update(alumnos[1], function(result) {                
            expect(result).toBe(true);
        });
        $httpMock.flush();
        
    });
    
    
    it('Server fail', function() {
        
        logMock.error =  function() {
            expect(arguments[0]).toBe('%s %s %s');
            expect(arguments[1]).toBe('PUT');
            expect(arguments[2]).toBe(url);
            expect(arguments[3]).toBe(404);            
        };
    
        putHandler.respond(404, 'not found')
        
        $httpMock.expectPUT(url);
        api.update(alumnos[1], function(result) {                
            console.log('ESTE TEXTO NO DEBERIA APARECER');
            console.log(arguments.length);
        });
        $httpMock.flush();
        
    });
    
    
});