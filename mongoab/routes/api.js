var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var productos = require('./../models/productos');

/* GET home page. */
router.get('/', function(req, res, next) {
    var Producto = mongoose.model('Producto');
    
    Producto.find(function (err, productos) {
        if(err) return next(err);
        res.json(productos);
    });
});

router.post('/', function(req, res, next) {
    var producto = productos({
        name: req.body.name,
        price: parseFloat(req.body.price, 10)
    });
    
    producto.save(function (err, data) {
        if(err)  return next(err);
        res.json(data);
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
            res.json(data);
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
