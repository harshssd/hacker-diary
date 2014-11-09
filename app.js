var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var ejs = require('ejs');

var passport = require('passport');
var passportLocal = require('passport-local');
var passportGithub = require('passport-github');
var flash = require('connect-flash');
var bcrypt = require('bcrypt-nodejs');

var database = require('./config/database'); // load the database config

// configuration ===============================================================
mongoose.connect(database.url);

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovedevelopingsoftwares' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//app.use(express.static(__dirname + '/public/views'));
app.use(bodyParser()); // pull information from html in POST

//// application -------------------------------------------------------------
//app.get('/', function(req, res) {
//    res.sendfile('./public/index.html');
//});

require('./app/routes.js')(app, passport);

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});