module.exports = (function() {
    var AlumnosController = function(express, alumnosApi) {
        this.express = express.module;
        this.alumnosApi = alumnosApi;
        this.router = this.express.Router();
        
        var router = this.router;
        
        router.get('/', function(req, res, next) {
            alumnosApi.getAll(function (err, alumnos) {
                if (err) return next(err);
                res.json(alumnos);
            });
        });
        
        router.post('/', function(req, res, next){
            alumnosApi.save(req.body, function(err, alumno){
                if(err) return next(err);
                res.json(alumno);       
            });
        });
        
        router.get('/:id', function(req, res, next) {
            alumnosApi.getOne(req.params.id, function (err, alumno) {
                if(err) return next(err);
                res.json(alumno);
            });
        });
        
        router.put('/', function(req, res, next) {
            alumnosApi.update(req.body, function(err, alumno) {
                if(err) return next(err);
                res.json(alumno);
            }); 
        });
        
        router.delete('/:id', function(req, res, next) {
            alumnosApi.delete(req.params.id, function(err, alumno) {
                if(err) return next(err);
                res.json(alumno);
            }); 
        });

    }
    
    return AlumnosController;
})();