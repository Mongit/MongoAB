var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: String,
    price: Number
});

var Producto = mongoose.model('Producto', schema);

module.exports = function(config) {
    return new Producto(config);
};