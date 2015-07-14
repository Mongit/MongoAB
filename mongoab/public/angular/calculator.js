(function() {
    var app = angular.module('app');
    
    app.service('MathService', function() {
        this.add = function(a,b) { return a + b };
        this.substract = function(a,b) { return a - b };
        this.multiply = function(a,b) { return a * b };
        this.divide = function(a,b) { return a / b };
            
    });
    
    app.factory('CalculatorService', function(MathService) {
        var fac = {};
        
        fac.square = function(a) { return MathService.multiply(a,a); };
        fac.cube = function(a) { return MathService.multiply(a, MathService.multiply(a,a)); };
        
        return fac;
    });
    
    app.controller('CalculatorController', function($scope, CalculatorService) {
        $scope.doSquare = function () {
            $scope.answer = CalculatorService.square($scope.number);
        }
        $scope.doCube = function () {
            $scope.answer = CalculatorService.cube($scope.number);
        }
    });
    
})();