(function () {
    var app = angular.module('app', ['ngRoute']);
    
    
    
    app.config(["$routeProvider", "$httpProvider", function ($router, $httpProvider) { 
        $httpProvider.interceptors.push('httpInterceptor');
        
        $router.when("/", { templateUrl: "angular/views/index.html" })
        .when('/todos', { templateUrl: "angular/views/todos.html" })
        .when('/nuevo', { templateUrl: "angular/views/nuevo.html" })
        .when('/editar/:id', { templateUrl: "angular/views/editar.html" })
        .when('/ver/:id', { templateUrl: "angular/views/ver.html" })
        .when('/login', { templateUrl: "angular/views/login.html" })
        .when('/signup', { templateUrl: "angular/views/signup.html" })
        .otherwise({ redirectTo: "/" });        
    }]);
})();