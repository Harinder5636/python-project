var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var todosRouter = require('./routes/todos'); // importing the router object from ./routes/tods

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); // < this line tells res.render where to look 
// for our view  ejs files
app.set('view engine', 'ejs');


app.use(function(req, res, next){
  console.log('middleware function is being called!');
  req.time = new Date().toLocaleDateString()
  next(); // pass the request to the next middleware,app.use(logger('dev'));
})


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // <- decodes the contents of the form, and attaches to
// req.body for us
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/todos', todosRouter); // prepends every route in the usersRouter with /users

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
