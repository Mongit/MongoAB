(function() {
    var app = angular.module('app');
    
    app.controller('TodosController', ['$http', "$location", 'productosApi', function($http, $location, productosApi) {//empieza $scope del constructor (funcion anonima del array)
        
        var ctrl = this;//lo iguala al scope para poder hacer uso del objeto dentro de otras funciones
        ctrl.productos = [];
        
        productosApi.getAll(function(productos){
            ctrl.productos = productos;
        });
        
        ctrl.delete = function(id) {
            productosApi.delete(id, function () {
                $location.path('/');
            });
        };
        
    }]);//termina el $scope del constructor
})();


(function() {
    var app = angular.module('app');
    
    app.controller('NuevoController', ['$http', '$location', 'productosApi', function($http, $location, productosApi) { 
        var model = this;
        model.name = '';
        model.price = '';
        
        model.save = function() {
            productosApi.save(model, function (data, status, headers, config) {
                $location.path('/');
            });
        };
        
    }]);
})();


(function() {
    var app = angular.module('app');
    var dependencies = ['$http', '$location', '$routeParams', 'productosApi'];
    
    dependencies.push(function($http, $location, $routeParams, productosApi) {
        var model = this;
        model.name = '';
        model.price = '';
        model.id = $routeParams.id;
        
        model.load = function(id) {
            productosApi.getOne(id, function(data, status, headeres, config) {
                model.name = data.name;
                model.price = data.price;
            });
        };
        
        model.update = function() {
            productosApi.update(model, function (data, status, headers, config) {
                $location.path('/');
            });
        };
        
        model.load($routeParams.id);
    });
    
    
    app.controller('EditarController', dependencies);
})();


(function() {
    var app = angular.module('app');
    
    app.controller('VerController', ['$http', '$location', '$routeParams', 'productosApi', function($http, $location, $routeParams, productosApi) {
        var model = this;
        model.name = '';
        model.price = '';
        model.id = 0;
        
        productosApi.getOne($routeParams.id, function(data, status, headers, config) {
                model.name = data.name;
                model.price = data.price;
                model.id = data._id;
            });
    }]);        
})();



(function() {
    var app = angular.module('app');
    
    app.controller('FormCtrl', function( $scope) {
        $scope.formData = {};
        
        $scope.submitForm = function (fornData) {
            alert('Form submitted with' + JSON.stringify(formData));
        };
    });
})();
