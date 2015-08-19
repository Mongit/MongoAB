var Alumno = require("./../src/alumno");
var mongoose = require("./mongooseMock");
var AlumnosApi = require("./../src/alumnosApi");

describe("alumnos api", function() {
    it("getAll method", function(done){
        mongoose.database = [
            {nombre: "Jonas", calificacion: 9},
            {nombre: "ro", calificacion: 8}
        ];
        var alumno = new Alumno(mongoose);
        var api = new AlumnosApi(alumno);
        
        api.getAll(function(err, data) {
            expect(data).toBe(mongoose.database);
            done();
        });
    });
    
    it("save method", function(done) {
        var body = {nombre: "Juan", calificacion: 8}
        var alumno = new Alumno(mongoose);
        var api =  new AlumnosApi(alumno);
        
        api.save(body, function(err, data) {
            expect(data.nombre).toBe(body.nombre);
            expect(data.calificacion).toBe(body.calificacion);
            done();
        });
        
    });
    
    it("getOne method", function(done) {
        mongoose.database = [
            {nombre: "Pedro", calificacion: 8, id: 1}
        ];
        var body = {nombre: "Pedro", calificacion: 8, id: 1};
        var alumno = new Alumno(mongoose);
        var api =  new AlumnosApi(alumno);
        
        api.getOne(body.id, function(err, data) {
            expect(data).toEqual(body);
            done();
        });
    });
    
    
    it("update method", function(done) {

        var alumno = new Alumno(mongoose);
        var api =  new AlumnosApi(alumno);
        
        var body = {nombre: "Luis", calificacion: 2, id: 6};
        
        api.save(body, function(err, alumnoInstance) {
            
        });
    
        var bodyUpdate = {nombre: "Pedrito", calificacion: 9, id: 6}; 
        api.update(bodyUpdate, function(err, data){
            expect(data.nombre).toBe(bodyUpdate.nombre);
            expect(data.calificacion).toBe(bodyUpdate.calificacion);
            expect(data.id).toBe(bodyUpdate.id);
            done();
        });
    });
    
    it("delete method", function(done) {
        var alumno = new Alumno(mongoose);
        var api =  new AlumnosApi(alumno);
        var body = {nombre: "Luis", calificacion: 2, id: 6};
        
        var found = undefined;
        alumno.model.findById(6, function(err, data) {
            found = data;
            expect(found).not.toBeUndefined();
        });
        
        api.delete(body.id, function(err, data) {
            expect(data).toEqual(found);
            alumno.model.findById(6, function(err, deleted) {
                expect(deleted).toBeUndefined();
            });
            done();
        });
        
    });
    
});