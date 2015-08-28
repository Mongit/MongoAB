var mongoose = require("mongoose");

var schema = mongoose.Schema({
    nombre: String,
    calificacion: Number
});

module.exports = mongoose.model('Alumno', schema);
