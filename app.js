var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var sys = require('sys')
var exec = require('child_process').exec;
var child;

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.get('/switch/:id/:cmd', function (req, res) {
  var _stdout;
  var shellcmd = "tdtool --" + req.params.cmd + " " + req.params.id;
  child = exec(shellcmd, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    var ret = {
      input: {
        id: req.params.id,
        cmd: req.params.cmd,
      },
      output: {
        shellcmd: shellcmd,
        stdout: stdout,
        stderr: stderr,
        error: error,
      }
    };
    res.end( JSON.stringify(ret));
  });

})

app.get('/dim/:id/:level', function (req, res) {
  var _stdout;
  var shellcmd = "tdtool --dimlevel " + req.params.level + " --dim " + req.params.id;
  child = exec(shellcmd, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    var ret = {
      input: {
        id: req.params.id,
        level: req.params.level,
      },
      output: {
        shellcmd: shellcmd,
        stdout: stdout,
        stderr: stderr,
        error: error,
      }
    };
    res.end( JSON.stringify(ret));
  });

})


app.get('/sound/:cmd', function (req, res) {
  var _stdout;
  var shellcmd = "~/ariot/BedBackend/sound/" + req.params.cmd + ".sh &";
  child = exec(shellcmd, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    var ret = {
      input: {
        cmd: req.params.cmd,
      },
      output: {
        shellcmd: shellcmd,
        stdout: stdout,
        stderr: stderr,
        error: error,
      }
    };
    res.end( JSON.stringify(ret));
  });

})


app.get('/scene/:cmd', function (req, res) {
  var _stdout;
  var shellcmd = "~/ariot/scenes/" + req.params.cmd + ".sh &";
  child = exec(shellcmd, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    var ret = {
      input: {
        cmd: req.params.cmd,
      },
      output: {
        shellcmd: shellcmd,
        stdout: stdout,
        stderr: stderr,
        error: error,
      }
    };
    res.end( JSON.stringify(ret));
  });

})


app.get('/angle/:id/:level', function (req, res) {
  var _stdout;
  var shellcmd = "python3 /home/pi/angler.py /dev/ttyACM1 " + req.params.id + " " + req.params.level;
  child = exec(shellcmd, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    var ret = {
      input: {
        id: req.params.id,
        level: req.params.level,
      },
      output: {
        shellcmd: shellcmd,
        stdout: stdout,
        stderr: stderr,
        error: error,
      }
    };
    res.end( JSON.stringify(ret));
  });

})

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
