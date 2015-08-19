var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var jwt = require('jwt-simple');

var container = require('./src/container');

var db = container.get('dbConnection');
db.connect('mongodb://localhost/students');

var routes = require('./routes/index');
var users = require('./routes/users');
var usuariosApi = container.get("usuariosController");
var api = container.get("alumnosController");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    resave: true,
    saveUninitialized: true,
    store: new RedisStore({
        host: 'localhost',
        port: 6379
    }),
    secret: '0FFD9D8D-78F1-4A30-9A4E-0940ADE81645',
    cookie: { path: '/', maxAge: 3600000 }
}));

app.use('/', routes);
app.use('/users', users);
app.use('/alumnos/api', api.router);
app.use('/account/api', usuariosApi.router);

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
