(function() {
    var app = angular.module('app');
    
    app.factory("accountProxy", ["proxyFactory", function(proxyFactory) {
        var AccountProxy = function() {
            this.loginProxy = proxyFactory('/account/api/login');
            this.logoutProxy = proxyFactory('/account/api/logout');
            this.signupProxy = proxyFactory('/account/api/signup');
        };
        
        AccountProxy.prototype.login = function(model, success){
            this.loginProxy.save(model, success);
        };
        
        //AccountProxy.prototype.logout = function(){}
        AccountProxy.prototype.signup = function(model, success){
            this.signupProxy.save(model, success);
        };
        
        return new AccountProxy();
    }]);
})();