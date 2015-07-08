var express = require('express');
var router = express.Router();
var productos = require('./../models/productos');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) { console.log('conexion exitonsa'); });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([
      {name:'Sabritas', price: 8},
      {name:'Salsa', price: 20}
  ]);//el controller recibe un array, por lo tanto res le manda un array
});

module.exports = router;
