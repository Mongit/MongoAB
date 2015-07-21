describe("Nuevo Controller Test", function() {
    var url = '/api/';
    var $controller, 
        $httpMock, 
        $locationCaptured;//changed before app
    
    beforeEach(module('app'));
        
    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));
    
    beforeEach(inject(function($httpBackend){
        $httpMock = $httpBackend;
        $httpBackend.when('POST', url).respond(true);//false
    }));
    
    beforeEach(inject(function($location) {
        $locationCaptured = $location;
        }));
    
    it('Changes location on Save', function() {
        var controller = $controller('NuevoController');
        
        controller.save();
        
        $httpMock.expectPOST(url);
        $httpMock.flush();
        
        expect($locationCaptured.path()).toBe('/');
    });
     
});