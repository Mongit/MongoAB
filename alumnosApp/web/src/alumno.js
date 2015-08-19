var Alumno = function(mongoose) {
    this.mongoose = mongoose.module;
    this.schema = this.mongoose.Schema({
        nombre: String,
        calificacion: Number
    });
    this.model = this.mongoose.model('Alumno', this.schema);
};

Alumno.prototype.create = function (configObj) {
    var that = this;
    return new that.model(configObj);
};

module.exports = Alumno;