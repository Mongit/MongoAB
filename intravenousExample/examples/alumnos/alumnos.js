var Alumno = function (boleta) {
    
    this.alumno = function(nombre, edad){
        
        return "NOMBRE: "+ nombre +
                " EDAD " + edad + 
                " CALIFICACIONES: " + 
                " esp "+boleta.esp + 
                " mat " + boleta.mat + 
                " ing " + boleta.ing;
    };

};

Alumno.$inject = ["boleta"];
module.exports = Alumno;

