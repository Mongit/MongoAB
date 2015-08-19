var AlumnosApi = (function() {
    var AlumnosApi = function(alumno) {
        this.alumno = alumno;
    };
    
    AlumnosApi.prototype.getAll = function(callback) {
        var that = this;       
        that.alumno.model.find(callback);
    };
    
    AlumnosApi.prototype.save = function(body, callback) {
        var that = this;
        var alumno = that.alumno.create(body);
        alumno.save(callback);
    };
    
    AlumnosApi.prototype.getOne = function(id, callback) {
        var that = this;
        that.alumno.model.findById(id, callback);
    };
    
    AlumnosApi.prototype.update = function(body, callback) {
        var that = this;
        that.alumno.model.findById(body.id, function (err, alumno) {
            if(err) return callback(err, null);
            
            alumno.nombre = body.nombre;
            alumno.calificacion = body.calificacion;

            alumno.save(callback); 
        });
    };
    
    AlumnosApi.prototype.delete = function(id, callback) {
        var that = this;
        that.alumno.model.findByIdAndRemove(id, callback);
    };
    
    
    return AlumnosApi;
})();

module.exports = AlumnosApi;