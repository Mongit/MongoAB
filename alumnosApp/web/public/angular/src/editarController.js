(function() {
    var app = angular.module('app');    
    var dependencies = ['$http', '$location', '$routeParams', 'alumnosProxy'];
    
    dependencies.push(function($http, $location, $routeParams, proxy) {
        var ctrl = this;
        ctrl.nombre = '';
        ctrl.calificacion = 0;
        ctrl.id = $routeParams.id;
        
        ctrl.obtener = function(id) {
            proxy.getOne(id, function(alumno){
                ctrl.nombre = alumno.nombre;
                ctrl.calificacion = alumno.calificacion;
            });
        };
        
        ctrl.editar = function() {
            proxy.update(ctrl, function(alumnos){
                $location.path('/');
            });
        };
        
        ctrl.obtener($routeParams.id);
    });
        
    
    app.controller('EditarController', dependencies);
})();