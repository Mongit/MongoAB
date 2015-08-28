describe('tokenStorage test', function() {
    var qMock;
    var locationMock;
    var tokenStorageMock;
    
    beforeEach(module('app'));
    
    beforeEach(function() {
        qMock = {
            rejection : undefined,
            reject: function (rejection){
                qMock.rejection = rejection
            }
        }
        locationMock = {
            stringPath : undefined,
            path: function (stringPath){
                locationMock.stringPath = stringPath;
            }
        };
        tokenStorageMock = {
            obj: undefined,
            getToken: function() {
                return tokenStorageMock.obj;
            },
            getAccessHeader: function() {
                //return tokenStorageMock.obj.token;
                var tokenObj = tokenStorageMock.getToken();
                if (tokenObj) {
                    return tokenObj.token;
                }
                return '';
            }
        };
      
        module(function ($provide) {
            $provide.value('$q', qMock);
            $provide.value('$location', locationMock);
            $provide.value('tokenStorage', tokenStorageMock);
        });
    });
    
    it('request returns obj with headers["x-access-token"] equal to string', 
        inject(function (httpInterceptor) {
        var token = {token: '123asd'};
        tokenStorageMock.obj = token;
        var request = {headers: {}};
        var actual =httpInterceptor.request(request).headers["x-access-token"];
       
        expect(actual).toEqual(token.token);
    }));
    it('locationMock.stringPath recibes /login', 
       inject(function (httpInterceptor) {
        var request = {headers: {}};
        httpInterceptor.request(request)
        var actual = locationMock.stringPath
        var expected = "/login";
        expect(actual).toEqual(expected);
    }));
    it('locationMock.path() is listed in the freeAccessPages array so request.headers x-access-token = ""', inject(function (httpInterceptor) {
        locationMock.stringPath = "/login"; 
        var request = {headers: {}};
        var actual = httpInterceptor.request(request).headers["x-access-token"];
        var expected = "";
        expect(actual).toEqual(expected);
    }));
    it('responseError recives an rejection object with status property === 401, so is redirected to /login, and q.reject recives an object rejection', inject(function (httpInterceptor) {
        var rejection = {status: 401};
        httpInterceptor.responseError(rejection);
        var actual = locationMock.stringPath;
        var expected = "/login";
        expect(actual).toEqual(expected);
        expect(qMock.rejection).toEqual(rejection);
    }));
    it('responseError recives an rejection object with status !property === 401, so is  not redirected to /login, and q.reject recives an object rejection', inject(function (httpInterceptor) {
        var rejection = {status: 200};
        httpInterceptor.responseError(rejection);
        var actual = locationMock.stringPath;
        var expected = "/login";
        expect(actual).toBeUndefined();
        expect(qMock.rejection).toEqual(rejection);
    }));
    
    
    
});