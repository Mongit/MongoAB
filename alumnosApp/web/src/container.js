//dependencies
var intravenous = require("intravenous");

//local modules
var Alumno = require("./alumno");
Alumno.$inject = ["mongoose"];

var AlumnosApi = require("./alumnosApi");
AlumnosApi.$inject = ["alumno"];

var AlumnosController = require("./alumnosController");
AlumnosController.$inject = ["express", "alumnosApi"];

var DbConnection = require("./../database/dbConnection");
DbConnection.$inject = ["mongoose"];

var Usuario = require("./usuario");
Usuario.$inject = ["mongoose"];

var UsuariosApi = require("./usuariosApi");
UsuariosApi.$inject = ["usuario"];

var AccountController = require("./accountController");
AccountController.$inject = ["express", "usuariosApi", "moment", "jwt"];

var container = intravenous.create();

//register
container.register("mongoose", { module: require('mongoose') });
container.register("alumno", Alumno);
container.register("alumnosApi", AlumnosApi);
container.register("express", { module: require('express') });
container.register("alumnosController", AlumnosController);
container.register("dbConnection", DbConnection);
container.register("moment", { module: require('moment') });
container.register("jwt", { module: require('jwt-simple') });
container.register("usuario", Usuario);
container.register("usuariosApi", UsuariosApi);
container.register("usuariosController", AccountController);

module.exports = container;