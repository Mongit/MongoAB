var express = require('express');
var router = express.Router();
var usuarios = require('./../public/redis/usuarioApi')();
var validateForm = require('./../public/redis/validateForm')();
    
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login', {error: ''});
});

router.post('/login', function(req, res, next) {
    
    usuarios.validateUser(req.body.email, req.body.password, function(err, data) {
        if(err) return res.render('login', { error: err.message });
       // req.session.user = user;
        req.session.authenticated = true;
        res.redirect('/');
    });      
});

router.get('/signup', function(req, res, next) {
    res.render('signup', { error: '' });
});

router.post('/signup', function(req, res, next) {
    var err = validateForm.validate(req.body);
    
    if(err.err.length === 0) {
        usuarios.save(req.body, function(err, data) {
            if(err) {
                return res.render('signup', { error: err.message });
            }
            else {
                res.redirect('/users/login');    
            }
        });
    }
    else {
        res.render('signup', { error: err.err});
    }
});


router.get('/logout', function(req, res, next) {
    req.session.authenticated = false;
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
