describe('alumnosProxy test', function() {
    var url = '/alumnos/api/';
    
    beforeEach(module('app'));
    
    it('create an instance', inject(function (alumnosProxy) {
        expect(alumnosProxy.url).toEqual(url);
    }));
    
});