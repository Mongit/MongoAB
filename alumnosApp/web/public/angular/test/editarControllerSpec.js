describe("editar controller", function(){
    var url = '/alumnos/api/';
    var id = 10;
    var all = [
        { nombre: 'rodrigo', calificacion: 30, id: 10, _id: id },
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
        $httpBackend.when('GET',  url + id).respond(all[0]);
        $httpBackend.when('PUT', url).respond(true);
    }));
    
    
    beforeEach(inject(function($location) {
        $locationCaptured = $location;
    }));

    beforeEach(inject(function($routeParams) {
        $routeParams.id = id;
    }));

    
    it('loads alumno on controller instantiation', function() {
        var controller = $controller('EditarController');    
        
        controller.nombre = 'Rodrigo';
        controller.calificacion = 12;
        controller.id = id;
        
        $httpMock.expectGET(url + id);
        $httpMock.flush();        
        
        expect(controller.nombre).toEqual(all[0].nombre);
        expect(controller.calificacion).toEqual(all[0].calificacion);
        expect(controller.id).toEqual(id);
        
    });
    
    it('changes location on update', function() {
        var controller = $controller('EditarController');
        
        controller.editar();
        
        $httpMock.expectPUT(url);
        $httpMock.flush();
        
        expect($locationCaptured.path()).toBe('/');
        
    });
});