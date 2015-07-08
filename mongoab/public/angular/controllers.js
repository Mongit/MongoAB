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
            console.log('%s %s %s', config.method, config.url, status);
        });
        
        
        ctrl.delete = function(id) {
            $http({
                url: '/api/' + id,
                method: "DELETE",
            }).success(function (data, status, headers, config) {
                $location.path('/');
            }).error(function (data, status, headers, config) {
                console.log('%s %s %s', config.method, config.url, status);
            });
        }
        
    }]);//termina el $scope del constructor
})();


(function() {
    var app = angular.module('app');
    
    app.controller('NuevoController', ['$http', '$location', function($http, $location) { 
        var model = this;
        model.name = '';
        model.price = '';
        
        model.save = function() {
            $http({
                url: '/api/',
                method: "POST",
                data: model
            }).success(function (data, status, headers, config) {
                $location.path('/');
            }).error(function (data, status, headers, config) {
                console.log(status);            
            });
        }
    }]);
})();


(function() {
    var app = angular.module('app');
    
    app.controller('EditarController', ['$http', '$location', '$routeParams', function($http, $location, $routeParams) {
        var model = this;
        model.name = '';
        model.price = '';
        model.id = 0;
        
        model.load = function() {
            $http({
                url: '/api/' + $routeParams.id,
                method: "GET"
            }).success(function(data, status, headeres, config) {
                model.name = data.name;
                model.price = data.price;
                model.id = data._id;
            }).error(function (data, status, headers, config) {
                console.log('%s %s %s', config.method, config.url, status);
            });
        }
        
        model.update = function() {
            $http({
                url: '/api/',
                method: 'PUT',
                data: model
            }).success(function (data, status, headers, config) {
                $location.path('/');
            }).error(function (data, status, headers, config) {
                console.log('%s %s %s', config.method, config.url, status);
            });
        }
        
        model.load();
    }]);
})();


(function() {
    var app = angular.module('app');
    
    app.controller('VerController', ['$http', '$location', '$routeParams', function($http, $location, $routeParams) {
        var model = this;
        model.name = '';
        model.price = '';
        model.id = 0;
        
        model.load = function() {
            $http({
                url: '/api/' + $routeParams.id,
                method: "GET",
            }).success(function(data, status, headers, config) {
                model.name = data.name;
                model.price = data.price;
                model.id = data._id;
            }).error(function(data, status, header, config){ 
                console.log(status);
            });
            
        }
        
        model.load();
        
    }]);        
})();