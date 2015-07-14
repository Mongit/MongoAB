(function() {
    var app = angular.module('app');
    
    app.factory('apiFactory', ['$http', function($http){
        
        var Api = function(url) {
            this.url = url;
        };
        
        Api.prototype.error = function(data, status, headers, config){
            console.log.error('%s %s %s', config.method, config.url, status);
        };
        
        Api.prototype.getOne = function(id, success) {
            var api = this;
            $http({
                method: "GET",
                url: api.url + id
            }).success(success).error(api.error);
        };
        
        Api.prototype.getAll = function(success) {
            var api = this;
            $http({
                method: "GET",
                url: api.url
            }).success(success).error(api.error);
        };
        
        Api.prototype.delete = function(id, success) {
            var api = this;
            $http({
                method: "DELETE",
                url: api.url + id
            }).success(success).error(api.error);
        };
        
        Api.prototype.save = function(model, success) {
            var api = this;
            $http({
                method: 'POST',
                url: api.url,
                data: model
            }).success(success).error(api.error);
        };
        
        Api.prototype.update = function(model, success) {
            var api = this;
            $http({
                method: 'PUT',
                url: api.url,
                data: model
            }).success(success).error(api.error);
        };
        
        return function(url) {
            return new Api(url);
        };
        
    }]);
})();

(function() {
    var app = angular.module('app');
    
    app.factory('productosApi', ['apiFactory', function(apiFactory) {
        var api = apiFactory('/api/');
        return api;
    }]);
})();