var AlumnosApi = (function() {
    var AlumnosApi = function(models, alumnoFactory) {
        this.models = models;
        this.alumnoFactory = alumnoFactory;
    };
    
    AlumnosApi.prototype.getAll = function(req, res, next) {
        var that = this;       
        that.models.alumno.find(function (err, alumnos) {
            if (err) return next(err);
            res.json(alumnos);
        });
    };
    
    AlumnosApi.prototype.save = function(req, res, next){
        var that = this;
        var alumno = that.alumnoFactory.get();
        for(var property in req.body) {
            alumno[property] = req.body[property];
        };
        alumno.save(function(err, alumno){
            if(err) return next(err);
            res.json(alumno);       
        });
    };
    
    AlumnosApi.prototype.getOne = function(req, res, next) {
        var that = this;
        that.models.alumno.findById(req.params.id, function (err, alumno) {
            if(err) return next(err);
            res.json(alumno);
        });
    };
    
    AlumnosApi.prototype.update = function(req, res, next) {
        var that = this;
        that.models.alumno.findById(req.body.id, function (err, alumno) {
            if(err) return next(err);
            
            alumno.nombre = req.body.nombre;
            alumno.calificacion = req.body.calificacion;

            alumno.save(function(err, alumno) {
                if(err) return next(err);
                res.json(alumno);
            }); 
        });
    };
                                    
    AlumnosApi.prototype.delete = function(req, res, next) {
        var that = this;
        var remove = that.models.alumno.findByIdAndRemove;
        
        remove(req.params.id, function(err, alumno) {
            if(err) return next(err);
            res.json(alumno);
        }); 
    };    
    
    return AlumnosApi;
})();

module.exports = AlumnosApi;