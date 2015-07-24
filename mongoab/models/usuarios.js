var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({
    username: { type: String, required: 'Username is required!' },
    email: { type: String, required: 'Email is required!' },
    password: { type: String, required: 'Password is required!' }
});

var Usuario = mongoose.model('Usuario', usuarioSchema, 'test');

module.exports = function(config) {
    return new Usuario(config);
};