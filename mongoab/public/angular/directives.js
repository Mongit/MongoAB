(function() {
    var app = angular.module('app');
    
    var INTEGER_REGEXP = /^\-?d+$/ //regexp para un numero entero
    app.directive('integer', function() {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$validators.integer = function(modelValue, viewValue) {
                    if(ctrl.$isEmpty(modelValue)) {
                        //consider empty models to be valid
                        //return true;
                        return false;
                    }
                    
                    if(INTEGER_REGEXP.test(viewValue)){
                        //it is valid
                        return true;
                    }
                    //it is invalid
                    return false;
                };
            }
        };
    });
    
    app.directive('username', function($q, $timeout) {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                var usernames = [{name: 'cacahuates', price: 7}];
                
                ctrl.$asyncValidators.username = function(modelValue, viewValue) {
                    if(ctrl.$isEmpty(modelValue)) {
                        return $q.when();
                    }
                    
                    var def = $q.defer();
                    
                    $timeout(function() {
                        if(usernames.indexOf(modelValue) === -1) {
                            def.resolve();
                        } else {
                            def.reject();
                        }
                    }, 2000);
                    
                    return def.promise;
                };
            }
        };
    });
})();