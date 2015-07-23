var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var usuarios = require('./../models/usuarios');var validateForm = require('./../public/redis/validateForm');
    
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
    var Usuario = mongoose.model('Usuario');
    var config = validateForm(req.body); 
    var err = config.validate();

    var usuario = usuarios({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    
    if(err.err.length === 0) {
     
        Usuario.findOne({'email': req.body.email}, function(err, user) {
            if(err) next(err);
            if(user) {
                Usuario.find(function (err, usuarios) {
                    if(err) return next(err);
                });
                
                res.render('signup', {error: 'email already exist'})
            }

            if(!user) {
                usuario.save(function(err, data){
                    if(err) return next(err);
                    res.render('login');                
                });
            }
        });
    }
    
    else {
        res.render('signup', { error: err.err});
    }
});

module.exports = router;
