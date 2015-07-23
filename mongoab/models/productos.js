var mongoose = require('mongoose');

var productoSchema = mongoose.Schema({
    name: String,
    price: Number
});

var Producto = mongoose.model('Producto', productoSchema, 'test');

module.exports = function(config) {
    return new Producto(config);
};