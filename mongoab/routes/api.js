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
    var Producto = mongoose.model('Producto');
    
    Producto.find(function (err, productos) {
        if(err) return next(err);
        res.json(productos);
    });
/*res.json([
      {name:'Sabritas', price: 8},
      {name:'Salsa', price: 20}
  ]);el controller recibe un array, por lo tanto res le manda un array*/
});

router.post('/', function(req, res, next) {
    var producto = productos({
        name: req.body.name,
        price: parseFloat(req.body.price, 10)
    });
    
    producto.save(function (err, data) {
        if(err)  return next(err);
        res.json({ success: true });
    });
    
});

router.get('/:id', function(req, res, next) {
    var Producto = mongoose.model('Producto');
    
    Producto.findById(req.params.id, function(err, producto) {
        if (err) return next(err);
        res.json(producto);
    });
});

router.put('/', function(req, res, next) {
    var Producto = mongoose.model('Producto');
    
    Producto.findById(req.body.id, function (err, producto) {
        if (err) return next(err);

        producto.name = req.body.name;
        producto.price = parseFloat(req.body.price, 10);
        
        producto.save(function (err, data) {
            if(err) return next(err);
            res.json({ success: true });
        });
    });
});

router.delete('/:id', function(req, res, next) {
    var Producto = mongoose.model('Producto');
    
    Producto.remove({_id: req.params.id}, function(err) {
        if(err) return next(err);
        
        res.json({ success: true });
    });
});

module.exports = router;
