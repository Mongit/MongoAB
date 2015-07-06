var angularApp = angular.module('angularApp', []);

angularApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/todos', {
            templateUrl: '/js/template/todos.ejs',
            controller: 'mostrarCtrl'
    }).
    otherwise({ redirectTo: '/'});
}]);

angularApp.controller('mostrarCtrl', function($scope, $http) {
    $http.get("http://localhost:3000/todos").success(function(response) {
        $scope.productos = response;
    });
});