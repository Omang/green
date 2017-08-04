var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartyMiddleware = multipart();
var jwt = require('jsonwebtoken');
var jwtexpresss = require('express-jwt');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var secureRoutes = express.Router();

var app = express();

//mongoose.connect('mongodb://127.0.0.1:27017/music');


app.use(passport.initialize());

app.use(bodyParser.json());
app.use(multipartyMiddleware);
app.use('/server', express.static(__dirname + "/server"));
app.use('/weblab', express.static(__dirname + "/weblab"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/uploads', express.static(__dirname + "/uploads"));

app.get('/', function(req, res){
    res.sendfile('weblab/index.html');
});
app.listen('8080', function(){
    console.log("port running at port 8080");
});