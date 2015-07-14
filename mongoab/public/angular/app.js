(function () {
    var app = angular.module('app', ['ngRoute']);
    
    app.config(["$routeProvider", function ($router){
        $router.when("/", { templateUrl: "angular/templates/todos.html" })
        .when("/nuevo", { templateUrl: "angular/templates/nuevo.html" })
        .when("/editar/:id", { templateUrl: "angular/templates/editar.html" })
        .when("/ver/:id", { templateUrl: "angular/templates/ver.html" })
        .when("/validation", { templateUrl: "angular/templates/validation.html" })
        .when("/calculator", { templateUrl: "angular/templates/calculator.html" })
        .otherwise({ redirectTo: "/" });
    
    }]);
     
})();