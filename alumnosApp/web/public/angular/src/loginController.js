(function() {
    var app = angular.module('app');
    
    app.controller('LoginController', ['accountProxy', '$location', 'tokenStorage', function(proxy, $location, tokenStorage) {
        console.log("LOGIN CONTROLLER");
        var ctrl = this;
        
        ctrl.email = '';
        ctrl.password = '';
        
        ctrl.login = function() {
            proxy.login(ctrl, function(tokenObj) {
                console.log("ctrl: ");
                console.dir(ctrl);
                console.log("tokenObj: ");
                console.dir(tokenObj);
                tokenStorage.setToken(tokenObj);
                $location.path('/todos');
            });
        };
        
    }]);
})();