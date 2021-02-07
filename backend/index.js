const ENV = require('./env');
var express = require('express');
const User_Services = require('./services/users');

// initializing express app
var app = express();

app.listen(ENV.PORT,() => {
    console.log('Server Running On Port :',ENV.PORT);
});
app.get('/',(req,res)=>{
    function err(err){
        res.send(err.message);
    }
    function success(){
        res.send('user added successfully');
    }
    User_Services.add_user('shervin22','12345','shervin22@gmail.com',success,err);
})