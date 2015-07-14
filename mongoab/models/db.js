var mongoose = require('mongoose');
var configFactory = require('./config');

var ConectarABDD = function() {
    
};

ConectarABDD.prototype.conectar = function(dbURI) {
    var config = configFactory(dbURI.name, dbURI.host, dbURI.port);
    var uri = config.getConfig();
    
    mongoose.connect(uri);
    mongoose.connection.once('open', function () {
        console.log('conexion exitonsa'); 
    });
    mongoose.connection.on('error', function (err) {
        console.log('Mongoose default connection error: ' + err);
    });

};

module.exports = function() {
    return new ConectarABDD();
};


