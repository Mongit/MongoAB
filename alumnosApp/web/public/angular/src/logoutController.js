(function() {
    var app = angular.module('app');
    
    app.controller('LogoutController', ['accountProxy', '$location', 'tokenStorage', function(proxy, $location, tokenStorage) {
        var ctrl = this;
        
        ctrl.logout = function () {
            tokenStorage.clearToken();
        };
        
    }]);
})();