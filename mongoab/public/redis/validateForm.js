var ValidateForm = (function() {
    
    var ValidateForm = function () {
        
    };
    
    ValidateForm.prototype.validate = function(data) {
        data.err = [];
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        
        if(data.username === "") { 
            data.err.push("Please enter username"); 
        }

        if(!re.test(data.email)) {
            data.err.push("Please enter a valid email"); 
        }

        if(data.password !== data.confirmPassword) { 
            data.err.push("Your password or confirm password is incorrect"); 
        }
        
        return data;

    };
    
    return ValidateForm;
})();

module.exports = function() {
    return new ValidateForm();
};