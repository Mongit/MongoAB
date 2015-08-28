var Alumno = require("./alumnoMock");

var alumnoFactory = {
    get: function() {
        return new Alumno();
    }
};

module.exports = alumnoFactory;