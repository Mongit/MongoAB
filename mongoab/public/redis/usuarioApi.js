var mongoose = require('mongoose');
var usuarios = require('./../../models/usuarios');
//var validateForm = require('./validateForm');
var User = mongoose.model('Usuario');

var Usuario() {
    
}

Usuario.prototype.getAll = function(callback) {
    User.find(callback);
};

Usuario.prototype.getOneByEmail = function(email, callback) {
    if(!email)
        return callback(new Error('Email cannot be empty'), null);
    
    User.findOne({ email: email }, callback);
};

Usuario.prototype.validateUser = function(email, password, callback) {
    var that = this;
    that.getOneByEmail(email, function(err, data) {
        if (err) return callback(err);
        if (!password) return callback(new Error('Password cannot be empty'));
        if (!data) return callback(new Error('Incorrect email or password'));
        
        if(data.password !== password)
            return callback(new Error('Incorrect email or password'));
        
        return callback(null, data);
    });
};    

Usuario.prototype.save = function(user, callback) {
    if(user.password != user.confirmPassword)
        return callback(new Error('Password does not match confirmation'), null);
    
    var that = this;
    that.getOneByEmail(user.email, function (err, userFound) {
        if (err) return callback(err, null);
        if (userFound !== undefined && userFound !== null)
            return callback(new Error('Email already exists'));
        
        var u = usuarios({
            username: user.name,
            email: user.email,
            password: user.password
        });
        
        u.save(callback);
    });
};

Usuario.prototype.getOne = function(id, callback) {
    User.findById(id, callback);
};

Usuario.prototype.delete = function(id, callback) {
    User.remove({ _id: id }, callback);
};


module.exports = function() {
    return new Usuario();
};