var ENV = require('./env');
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var users_route = require('./routes/users');
var auth_route = require('./routes/auth');
// initializing express app
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8081"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// body parser for parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(ENV.PORT,() => {
    console.log('Server Running On Port :',ENV.PORT);
});


app.use('/users',users_route);
app.use('/auth',auth_route);