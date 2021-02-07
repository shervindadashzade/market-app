var ENV = require('./env');
var bodyParser = require('body-parser');
var express = require('express');
var users_route = require('./routes/users');
var auth_route = require('./routes/auth');
// initializing express app
var app = express();

// body parser for parameters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


app.listen(ENV.PORT,() => {
    console.log('Server Running On Port :',ENV.PORT);
});


app.use('/users',users_route);
app.use('/auth',auth_route);