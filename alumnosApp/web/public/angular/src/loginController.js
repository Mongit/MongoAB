(function() {
    var app = angular.module('app');
    
    app.controller('LoginController', ['accountProxy', '$location', 'tokenStorage', function(proxy, $location, tokenStorage) {
        var ctrl = this;
        
        ctrl.email = '';
        ctrl.password = '';
        
        ctrl.login = function() {
            ctrl.value = 'Logout';
            proxy.login(ctrl, function(tokenObj) {
                tokenStorage.setToken(tokenObj);
                $location.path('/todos');
            });
        };
        
    }]);
})();