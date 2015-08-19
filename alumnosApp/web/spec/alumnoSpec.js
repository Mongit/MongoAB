var Alumno = require("./../src/alumno");
var mongoose = require("./mongooseMock");

describe("Alumno Test", function() {
    it("Constructor", function(done){
        var alumno = new Alumno(mongoose);
        
        expect(alumno).not.toBeUndefined();
        expect(mongoose.models["Alumno"]).not.toBeUndefined();
        done();
    });
    
    it("Create method", function(done) {
        var alumno = new Alumno(mongoose);
        var config = {
            nombre: "John",
            calificacion: 9
        };
        var actual = alumno.create(config);
        
        expect(actual.nombre).toBe(config.nombre);
        expect(actual.calificacion).toBe(config.calificacion);
       
        done();
    });
});