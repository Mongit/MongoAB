(function() {
    var app = angular.module('app');
    
    app.controller('TodosController', ['$http', '$location', 'alumnosProxy', function($http, $location, proxy) {
       
        var ctrl = this;
        ctrl.alumnos = [];

        proxy.getAll(function(alumnos){
            ctrl.alumnos = alumnos;
        });

        ctrl.delete = function (id) {
            proxy.delete(id, function(){
                $location.path('/');
            });      
        };
        
    }]);
})();