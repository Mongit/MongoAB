(function() {
    var app = angular.module('app');
    
    app.controller('NuevoController', ['$http', '$location', 'alumnosProxy', function($http, $location, proxy) {
        var ctrl = this;
        ctrl.nombre = '';
        ctrl.calificacion = 0;
        
        ctrl.guardar = function() {
            proxy.save(ctrl, function(alumnos){
                $location.path('/');
            });
        };
        
        
    }]);
})();