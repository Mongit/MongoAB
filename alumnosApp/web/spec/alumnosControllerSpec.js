var mongoose = require("./mongooseMock");
var express = require("./expressMock");
var Alumno = require("./../src/alumno");
var AlumnosApi = require("./../src/alumnosApi");
var AlumnosController = require("./../src/alumnosController");

describe("Alumnos Controller", function() {
    it("getAll", function(done) {
        var alumno = new Alumno(mongoose);
        var alumnosApi = new AlumnosApi(alumno);
        var controller = new AlumnosController(express, alumnosApi);
        mongoose.database = [
            {nombre: "Pedro", calificacion: 9, id: 1}
        ];
        
        express.http('get/');
        expect(express.handlerParams.res.jsonValue).toEqual(mongoose.database);
        done();
    });
    
    it("getAll error", function(done) {
        var alumno = new Alumno(mongoose);
        var alumnosApi = new AlumnosApi(alumno);
        var controller = new AlumnosController(express, alumnosApi);
        mongoose.err = new Error("Test error");
        mongoose.database = [
            {nombre: "Pedro", calificacion: 9, id: 1}
        ];
        
        express.http('get/');
        expect(express.handlerParams.err).toEqual(mongoose.err);
        done();

    });
    
    it("post", function(done) {
        mongoose.err = undefined;
        var alumno = new Alumno(mongoose);
        var alumnosApi = new AlumnosApi(alumno);
        var controller = new AlumnosController(express, alumnosApi);
        var body = {nombre: "Jonas", calificacion: 9, id: 2};
        
        mongoose.database = [];
        express.handlerParams.req.body = body;
        express.http('post/');
        
        expect(express.handlerParams.res.jsonValue).
        toEqual(mongoose.database[0]);
        done();
    });
    
    it("post error", function(done) {
        mongoose.err = new Error("Post error");
        var alumno = new Alumno(mongoose);
        var alumnosApi = new AlumnosApi(alumno);
        var controller = new AlumnosController(express, alumnosApi);
        var body = {nombre: "Jonas", calificacion: 9, id: 2};
        
        mongoose.database = [];
        express.handlerParams.req.body = body;
        express.http('post/');
        
        expect(express.handlerParams.err).
        toEqual(mongoose.err);
        done();
    });
    
    it("getOne", function(done) {
        mongoose.err = undefined;
        var alumno = new Alumno(mongoose);
        var alumnosApi = new AlumnosApi(alumno);
        var controller = new AlumnosController(express, alumnosApi);
        var body = {nombre: "Jonas", calificacion: 9, id: 2};
        
        mongoose.database = [];
        express.handlerParams.req.body = body;
        express.http('post/');
        
        express.handlerParams.req.params = {id: 2};
        express.http('get/:id');
        
        expect(express.handlerParams.res.jsonValue).
        toEqual(mongoose.database[0]);
        done();
    });
    
    it("getOne err", function(done) {
        mongoose.err = new Error("getOne error");
        var alumno = new Alumno(mongoose);
        var alumnosApi = new AlumnosApi(alumno);
        var controller = new AlumnosController(express, alumnosApi);
        var body = {nombre: "Jonas", calificacion: 9, id: 2};
        
        mongoose.database = [];
        express.handlerParams.req.body = body;
        express.http('post/');
        
        express.handlerParams.req.params = {id: 2};
        express.http('get/:id');
        
        expect(express.handlerParams.err).
        toEqual(mongoose.err);
        done();
    });
    
    it("put", function(done) {
        mongoose.err = undefined;
        var alumno = new Alumno(mongoose);
        var alumnosApi = new AlumnosApi(alumno);
        var controller = new AlumnosController(express, alumnosApi);
        var body = {nombre: "Jonas", calificacion: 9, id: 2};
        
        mongoose.database = [];
        express.handlerParams.req.body = body;
        express.http('post/');
        
        express.handlerParams.req.body.nombre = "Rodrigo";
        express.handlerParams.req.body.calificacion = 10;
        express.http('put/');
        
        expect(express.handlerParams.res.jsonValue).
        toEqual(mongoose.database[0]);
        
        expect(mongoose.database[0].nombre).toBe("Rodrigo");
        expect(mongoose.database[0].calificacion).toBe(10);
        expect(mongoose.database.length).toBe(1);
        done();
    });
    
    it("put error", function(done) {
        mongoose.err = new Error("Test error");
        var alumno = new Alumno(mongoose);
        var alumnosApi = new AlumnosApi(alumno);
        var controller = new AlumnosController(express, alumnosApi);
        var body = {nombre: "Jonas", calificacion: 9, id: 2};
        
        mongoose.database = [];
        express.handlerParams.req.body = body;
        express.http('post/');
        
        express.http('put/');
        
        expect(express.handlerParams.err).
        toEqual(mongoose.err); 
        done();
    });
    
    it("delete", function(done) {
        mongoose.err = undefined;
        var alumno = new Alumno(mongoose);
        var alumnosApi = new AlumnosApi(alumno);
        var controller = new AlumnosController(express, alumnosApi);
        var body = {nombre: "Jonas", calificacion: 9, id: 2};
        
        mongoose.database = [];
        express.handlerParams.req.body = body;
        express.http('post/');
        
        var borrado = mongoose.database[0];
        
        express.handlerParams.req.params = {id: 2};
        express.http('delete/:id');
        
        expect(express.handlerParams.res.jsonValue).toEqual(borrado);
        expect(mongoose.database.length).toBe(0); 
        done();
    });
    
    it("delete error", function(done) {
        mongoose.err = new Error("test error");
        var alumno = new Alumno(mongoose);
        var alumnosApi = new AlumnosApi(alumno);
        var controller = new AlumnosController(express, alumnosApi);
        var body = {nombre: "Jonas", calificacion: 9, id: 2};
        
        mongoose.database = [];
        express.handlerParams.req.body = body;
        express.http('post/');
        
        var borrado = mongoose.database[0];
        
        express.handlerParams.req.params = {id: 2};
        express.http('delete/:id');
        
        expect(express.handlerParams.err).toEqual(mongoose.err); 
        done();
    });
    
});