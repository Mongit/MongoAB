var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var intravenous = require('intravenous');
//var civilized = require('./examples/node2/civilizedGreeter.js');
//var pirate = require('./examples/node2/pirateGreeter.js');
//var manager = require('./examples/node2/greetingManager.js');

//var container = intravenous.create();
//container.register("manager", manager);

var alumnos = require('./examples/alumnos/alumnos.js');
var boleta = require('./examples/alumnos/boleta.js');

var container = intravenous.create();
container.register("alumnos", alumnos);

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
/*
app.get('/hello', function(req, res, next) {
    var name = req.query.name;
    container.register("greeter", civilized);
    var gm = container.get("manager");
    res.send(gm.salute.call(gm, name));
});

app.get('/arrr', function(req, res, next) {
    var name = req.query.name;
    container.register("greeter", pirate);
    var gm = container.get("manager");
    res.send(gm.salute(name));
});
*/

app.get('/alumnos', function(req, res, next) {
    var name = req.query.name;
    var age = req.query.age;
    container.register("boleta", boleta);
    var alum = container.get("alumnos");
    res.send(alum.alumno(name, age));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
