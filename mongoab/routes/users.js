var express = require('express');
var router = express.Router();
var validateForm = require('./../public/redis/validateForm');
    
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
    //1. using user search for a user record in db
    //2. if user is found then compare user pwd against body pwd
    //3. if pwd match then set req.user = userFromDb (without pwd)
    res.render('login');
});

router.get('/signup', function(req, res, next) {
    res.render('signup', { error: ''});
});

router.post('/signup', function(req, res, next) {
    var config = {};
    console.dir(req.body);
    config.username = req.body.username;
    config.email = req.body.email;
    config.pwd = req.body.password;
    config.pwd2 = req.body.confirmPassword;
    
    //var validate = validateForm(config); 
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    config.err = [];
        
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
        
    if(config.err.length === 0) {
        res.render('signup', { error: 'Signup validated'});
    } else {
        res.render('signup', { error: config.err});
    }
    
    //TODO:
    //1. validate req.body
    //2. username/email verify that does not exist on db
    //3. if valid then save record to db
    //4. redirect to login page
    
});

module.exports = router;
