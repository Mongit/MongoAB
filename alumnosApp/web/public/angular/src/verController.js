(function() {
    var app = angular.module('app');
    
    app.controller('VerController', ['$http', '$routeParams', 'alumnosProxy', function($http, $route, proxy) {
        var ctrl = this;
        ctrl.nombre = '';
        ctrl.calificacion = 0;
        
        ctrl.obtener = function(id) {
            proxy.getOne(id, function(alumno){
                ctrl.nombre = alumno.nombre;
                ctrl.calificacion = alumno.calificacion;
            });
        };
        
        ctrl.obtener($route.id);
        
    }]);
})();