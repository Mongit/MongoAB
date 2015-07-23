var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
});

var Usuario = mongoose.model('Usuario', usuarioSchema, 'test');

module.exports = function(config) {
    return new Usuario(config);
};