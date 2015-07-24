var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    username: { type: String, required: 'Username is required!' },
    email: { type: String, required: 'Email is required!' },
    password: { type: String, required: 'Password is required!' }
});

var Usuario = mongoose.model('Usuario', schema);

module.exports = function(config) {
    return new Usuario(config);
};