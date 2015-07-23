var ValidateForm = (function() {
    var ValidateForm = function (data) {
        this.config = data;
        this.config.err = [];
    };
    
    ValidateForm.prototype.validate = function() {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        
        if(this.config.username !== "") { 
            console.log("\nusername: " + this.config.username); 
        } else { 
            this.config.err.push("Please enter username"); 
        }

        if(re.test(this.config.email)) { 
            console.log("\nemail: " + this.config.email); 
        } else { 
            this.config.err.push("Please enter a valid email"); 
        }

        if(this.config.password === this.config.confirmPassword) { 
            console.log("\npwd: " + this.config.password); 
            console.log("\npwd: " + this.config.confirmPassword); 
        } else { 
            this.config.err.push("Your password or confirm password is incorrect"); 
        }
        
        return this.config;

    };
    
    return ValidateForm;
})();

module.exports = function(data) {
    return new ValidateForm(data);
};