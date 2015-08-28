describe('Login controller test', function() {
    var accountProxyMock;
    var locationMock;
    var tokenStorageMock;
    var token = {
        token: '1234ertyu'
    };
    var $controller;
    
    beforeEach(module('app'));
    
    beforeEach(function() {
        accountProxyMock = {
            model: undefined,
            success: undefined,
            login: function(model, success) {
                accountProxyMock.model = model;
                accountProxyMock.success = success;
                success(token);
            }
        };
        
        locationMock = {
            url: undefined,
            path: function(url) {
                locationMock.url = url;
            }
        };
        
        tokenStorageMock = {
            obj: undefined,
            setToken: function(obj) {
                tokenStorageMock.obj = obj;
            }
        };
        
        module(function ($provide) {
            $provide.value('accountProxy', accountProxyMock);
            $provide.value('$location', locationMock);
            $provide.value('tokenStorage', tokenStorageMock);
        });

    });
    
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    
    it('login method test', function() {
        var loginController = $controller('LoginController');
        loginController.email = 'test@test.com';
        loginController.password = '123';
        loginController.login();
        
        expect(tokenStorageMock.obj).toEqual(token);
        expect(locationMock.url).toBe('/todos');
    });

});