describe('Todos Controller Test', function() {
    var alumnosProxyMock = undefined;
    var locationMock = undefined;
    var $http = undefined;
    var alumnos = [
        { nombre: 'rodrigo', calificacion: 30, id: 10 },
        { nombre: 'jonas', calificacion: 29, id: 11 },
        { nombre: 'monse', calificacion: 20, id: 12 }
    ];
    
    beforeEach(module('app'));
    beforeEach(function() {
        alumnosProxyMock = {
            getAll: function(callback) {
                callback(alumnos);
            },
            delete: function(id, callback) {
                callback();
            }
        };
        
        locationMock = {
            url: undefined,
            path: function(url) {
                locationMock.url = url;
            }            
        };
        
        module(function($provide) {
            $provide.value('alumnosProxy', alumnosProxyMock);
            $provide.value('$location', locationMock);
        });
    });//end beforeEach mocks
    
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    beforeEach(inject(function($httpBackend) {
        $httpMock = $httpBackend;
    }));

    it('delete method', function() {
        var todosController = $controller('TodosController');
        
        todosController.alumnos = [];
        expect(todosController.alumnos).not.toBeUndefined();
        
        todosController.delete(10);
        expect(todosController.alumnos[0]).toBeUndefined();
        expect(locationMock.url).toBe('/');
         
    });
});//end describe