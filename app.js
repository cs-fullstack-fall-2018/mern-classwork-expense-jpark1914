var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var mongoKey= require('./config/mongoKey');

//Require route files
var bankRouter = require('./routes/bank');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//=======================
//Using Main Routes======
//=======================

app.use('/bank', bankRouter);
app.use('/users', usersRouter);

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

//Setting up Db Connection:
function setUpDatabase() {
  //DB Config
    const db = require('./config/mongoKey').mongoURI;

    //DB connection
    mongoose.connect(db, {useNewUrlParser: true}).then(
        ()=> {
          console.log("Successfully connected to the database");
        },
        err => {
          console.log("ERROR connecting to the datatbase");
          throw err;
        }
    );
}

setUpDatabase();
module.exports = app;
