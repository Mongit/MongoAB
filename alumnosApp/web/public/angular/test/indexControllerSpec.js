describe("Todos controller", function(){
    var url = '/alumnos/api/';
    var id = 10;
    var all = [
        { nombre: 'rodrigo', calificacion: 30, id: 10 },
        { nombre: 'jonas', calificacion: 29, id: 11 },
        { nombre: 'monse', calificacion: 20, id: 12 }
    ];
    
    beforeEach(module('app')); 
    
    var $controller, $httpMock, $locationCaptured;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    
    beforeEach(inject(function($httpBackend) {
        $httpMock = $httpBackend;
        $httpBackend.when('GET', url).respond(all);
        $httpBackend.when('DELETE', url + id).respond(true);
    }));
    
    beforeEach(inject(function($location) {
        $locationCaptured = $location;
    }));

    
    it('loads students on TodosController', function() {
        var controller = $controller('TodosController');    
        expect(controller.alumnos).toEqual([]);
        
        $httpMock.expectGET(url);
        $httpMock.flush();        
        
        expect(controller.alumnos).toEqual(all);
    });
    
    it('changes location on Delete', function() {
        var controller = $controller('TodosController');
        
        controller.delete(id);
        
        $httpMock.expectDELETE(url + id);
        $httpMock.flush();
        
        expect($locationCaptured.path()).toBe('/');
    });
});