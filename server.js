var express  = require('express');
var app      = express();                              
var mongoose = require('mongoose');  
var port     = process.env.PORT || 8080;                   
var database = require('./config/database');
var morgan = require('morgan');          
var bodyParser = require('body-parser');  
var methodOverride = require('method-override'); 

// configuration ======================================
mongoose.connect(database.url || 'mongodb://localhost/todo-variation-1');    

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  
});

app.use(express.static(__dirname + '/public'));                 
app.use(morgan('dev'));                                         
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride());


// routes ======================================
require('./app/routes')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);