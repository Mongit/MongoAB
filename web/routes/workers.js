var express = require('express');
var router = express.Router();
var workers = require('../module/schema');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/company');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function (callback) {
    console.log('Conexion exitosa');
});


/* GET home page. */
router.get('/', function(req, res, next) {
    var Worker = mongoose.model('Worker');
    
    Worker.find(function (err, workers) {
        if(err) return next(err);
        res.json(workers);
    });
});

router.post('/', function(req, res, next) {
    var worker = workers({
        name: req.body.name,
        phone: parseInt(req.body.phone, 10)
    });
    
    worker.save(function (err, data) {
        if (err) return next(err);
        res.json({ success: true });
    });
});
    
    
module.exports = router;
