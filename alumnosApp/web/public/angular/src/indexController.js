(function() {
    var app = angular.module('app');
    
    app.controller('IndexController', ['tokenStorage', '$location', function(tokenStorage, $location) {
       
        var ctrl = this;
        if(tokenStorage.getToken())
            ctrl.value = 'Logout';
        else
            ctrl.value = 'Login';
        
        ctrl.logout = function (){
            tokenStorage.clearToken();
            ctrl.value = 'Login';
            $location.path("/login");
            return false;
        };
        
    }]);
})();