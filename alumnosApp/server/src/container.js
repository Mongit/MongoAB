//dependencies
var intravenous = require("intravenous");

//local modules
var Alumno = require("./alumnosCollection");
var Usuario = require("./usuariosCollection");
var models = {
    alumno: Alumno,
    usuario: Usuario
};

var AlumnosApi = require("./alumnosApi");
AlumnosApi.$inject = ["models", "alumnoFactory"];

var UsuariosApi = require("./usuariosApi");
UsuariosApi.$inject = ["models", "usuarioFactory", "moment", "jwt"];

var AlumnosController = require("./alumnosController");
AlumnosController.$inject = ["express", "alumnosApi"];

var DbConnection = require("./../database/dbConnection");
DbConnection.$inject = ["mongoose"];

var AccountController = require("./accountController");
AccountController.$inject = ["express", "usuariosApi"];

var container = intravenous.create();

//register
container.register("models", models);
container.register("alumno", Alumno);
container.register("usuario", Usuario);
container.register("alumnosApi", AlumnosApi);
container.register("express", { module: require('express') });
container.register("mongoose", { module: require('mongoose') });
container.register("alumnosController", AlumnosController);
container.register("dbConnection", DbConnection);
container.register("moment", { module: require('moment') });
container.register("jwt", { module: require('jwt-simple') });
container.register("usuariosApi", UsuariosApi);
container.register("usuariosController", AccountController);

module.exports = container;