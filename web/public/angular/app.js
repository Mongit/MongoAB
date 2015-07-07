(function () {
    var app = angular.module('app', ['ngRoute']);

    
    app.config(['$routeProvider', function ($router) {

        $router.when('/', { templateUrl: 'angular/templates/index.ejs'})
        .when('/nuevo', { templateUrl: 'angular/templates/nuevo.ejs' })
        .otherwise({ redirectTo: '/' });
    }]);
    
})();
