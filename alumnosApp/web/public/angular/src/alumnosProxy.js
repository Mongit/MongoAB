(function() {
    var app = angular.module('app');
    
    app.factory('alumnosProxy', ['proxyFactory', function(proxyFactory) {
        var proxy = proxyFactory('/alumnos/api/');
        return proxy;     
    }]);
})();
