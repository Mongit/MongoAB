var validateForm = (function() {
    var ValidateForm = function(config) {

        config.err = [];
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        

        if(config.username !== "") { 
            console.log("\nusername: " + config.username); 
        } else { 
            config.err.push("Please enter username"); 
        }

        if(re.test(config.email)) { 
            console.log("\nemail: " + config.email); 
        } else { 
            config.err.push("Please enter a valid email"); 
        }

        if(config.pwd === config.pwd2) { 
            console.log("\npwd: " + config.pwd); 
        } else { 
            config.err.push("Your password or confirm password is incorrect"); 
        }

        return config;
    }
    
    return ValidateForm;
})();


module.exports = function(config) {
    return new ValidateForm(config);
};