describe('accountProxy test', function() {
    var proxyFactoryMock;
    
    beforeEach(module('app'));
    
    beforeEach(function() {
        proxyFactoryMock = function(url) {
            var myObj = {
                url: url,
                model: undefined,
                success: undefined,
                save: function(model, success) {
                    myObj.model = model;
                    myObj.success = success;
                }
            };
            return myObj;
        };
        
        module(function ($provide) {
            $provide.value('proxyFactory', proxyFactoryMock);
        });

    });
    
    it('create an instance', inject(function (accountProxy) {
        expect(accountProxy.loginProxy.url)
            .toBe('/account/api/login');
        expect(accountProxy.logoutProxy.url)
            .toBe('/account/api/logout');
        expect(accountProxy.signupProxy.url)
            .toBe('/account/api/signup');
    }));
    
    it('login method', inject(function(accountProxy) {
        var model = {nombre: 'monserrat'};
        var success = function (data) {
            console.log(data);
        };
        
        accountProxy.login(model, success);
        expect(accountProxy.loginProxy.model).toEqual(model);
        expect(accountProxy.loginProxy.success).toEqual(success);
    }));
    
    it('signup method', inject(function(accountProxy) {
        var model = {nombre: 'monserrat'};
        var success = function (data) {
            console.log(data);
        };
        
        accountProxy.signup(model, success);
        expect(accountProxy.signupProxy.model).toEqual(model);
        expect(accountProxy.signupProxy.success).toEqual(success);
    }));
    
});