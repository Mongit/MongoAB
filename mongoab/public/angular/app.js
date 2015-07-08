(function () {
    var app = angular.module('app', ['ngRoute']);
    
    app.config(["$routeProvider", function ($router){
        $router.when("/", { templateUrl: "angular/templates/todos.html" })
        .otherwise({ redirectTo: "/" });
    
    }]);
     
})();