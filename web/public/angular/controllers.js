(function () {
    var app = angular.module('app');
        

    app.controller('IndexController', ['$http', '$location', function($http, $location){
        var model = this;
        model.workers = [];
        
            $http.get('/workers').success(function (data) {
                model.workers = data;
            });
        
        }]);
})();


(function() {
    var app = angular.module('app');
                                       
    app.controller('NuevoCtrl', ['$http', '$location', function($http, $location) {
        var model = this;
        model.name = '';
        model.phone = '';

        model.save = function() {
            $http({
                url: '/workers',
                method: "POST",
                data: model,
            }).success(function (data, status, headerss, config) {
                $location.path('/');
            }).error(function (data, status, headers, config) {
                console.log(status);
            });
        }
    }]);        
})();
