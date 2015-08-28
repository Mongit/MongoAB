describe('sigupController test', function() {
    var accountProxyMock;
    var locationMock;
    
    beforeEach(module('app'));
    
    beforeEach(function() {
        accountProxyMock = {
            model: undefined,
            success: undefined,
            signup: function(model, success) {
                accountProxyMock.model = model;
                accountProxyMock.success = success;
                success();
            }
        };
        
        locationMock = {
            url: undefined,
            path: function(url) {
                locationMock.url = url;
            }
        };
        
        module(function ($provide) {
            $provide.value('accountProxy', accountProxyMock);
            $provide.value('$location', locationMock);
        });

    });
    
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    
    it('signup method test', function() {
        var signupController = $controller('SignupController');
        signupController.email = 'test@test.com';
        signupController.password = '123';
        signupController.signup();
        
        expect(locationMock.url).toBe('/login');

    });
    
});