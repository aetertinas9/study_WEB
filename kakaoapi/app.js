var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var users = require('./routes/users');
var message = require('./routes/message');
var friend = require('./routes/friend');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/message',message);
app.use('/friend',friend);

//sequelize models
/*
var models = require('./node_modules/.bin/models');
models.sequelize.sync()
  .then(() => {
    console.log('✓ DB connection success.');
    console.log('  Press CTRL-C to stop\n');
  })
  .catch(err => {
    console.error(err);
    console.log('✗ DB connection error. Please make sure DB is running.');
    process.exit();
  });*/
/*
  models.User.findAll()
    .then(results) {
       res.json(results);
    })
    .catch(err => {
       console.error(err);
    });

  models.User.create({userID: '유저ID', password: '유저PW'})
    .then(result => {
       res.json(result);
    })
    .catch(err => {
       console.error(err);
    });
    models.User.update({password: '새로운 유저PW'}, {where: {userID: '유저ID'}})
      .then(result => {
         res.json(result);
      })
      .catch(err => {
         console.error(err);
      });
      models.User.destroy({where: {userID: '유저ID'}})
    .then(result => {
       res.json({});
    })
    .catch(err => {
       console.error(err);
    });
*/
//sequelize
//redis scanstreams

/*
//redis restClient test
var redis = require('redis');
var JSON = require('JSON');
client = redis.createClient(6379,'127.0.0.1');

app.use(function(req,res,next){
      req.cache = client;
      next();
})
app.post('/profile',function(req,res,next){
      req.accepts('application/json');

      var key = req.body.uid;
      var value = JSON.stringify(req.body);
      req.cache.set(key,value,function(err,data){
           if(err){
                 console.log(err);
                 res.send("error "+err);
                 return;
           }
           req.cache.expire(key,10);
           res.json(value);
           //console.log(value);
      });
})
app.get('/profile/:name',function(req,res,next){
      var key = req.params.name;

      req.cache.get(key,function(err,data){
           if(err){
                 console.log(err);
                 res.send("error "+err);
                 return;
           }
           var value = JSON.parse(data);
           res.json(value);
      });
});
*/


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
