(function() {
    var app = angular.module('app');
    
    app.controller('TodosController', ['$http', "$location", function($http, $location) {//empieza $scope del constructor (funcion anonima del array)
        
        var ctrl = this;//lo iguala al scope para poder hacer uso del objeto dentro de otras funciones
        ctrl.producto = [];
        
        var promise = $http({
            method: 'GET',
            url: '/api/'
        });
        
        promise.success(function(productos){
            /*Aqui la variable "ctrl" (this/scope del constructor) es util, ya que si                     utilizaramos solo this, this se referiria al scope del promise y NO al this                 del constuctor. */
            ctrl.productos = productos;
        });
        
        promise.error(function(data, status, headers, config){
            console.log('%s %s %s', config.method, config,url, status);
        });
        
    }]);//termina el $scope del constructor
})();