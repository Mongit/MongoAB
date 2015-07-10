// Bring Mongoose into the app
var mongoose = require('mongoose');

// Build the connection string
var dbURI = 'mongodb://localhost/test';

// Create the database connection
mongoose.connect(dbURI);

// CONNECTIONS EVENTS
// When successfully connected
mongoose.connection.once('open', function () {
    console.log('conexion exitonsa'); 
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// BRING IN YOUR SCHEMAS & MODELS 
var productos = require('./../models/productos');




