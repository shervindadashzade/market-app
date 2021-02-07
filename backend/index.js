const ENV = require('./env');
var express = require('express');

// initializing express app
var app = express();
app.listen(ENV.PORT,() => {
    console.log('Server Running On Port :',ENV.PORT);
});

app.get('/users',(req,res,next) => {
    res.json(["Tony","Lisa","Michael","Food"]);
}) ;
