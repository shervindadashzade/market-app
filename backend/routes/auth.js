var express = require('express');
var router = express.Router();
var users_services = require('../services/users');
const {body, validationResult} = require('express-validator');


router.post('/register',body("username").isLength({min:5,max:30}),body("password").isLength({min:5,max:30}),body("email").isEmail(),(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array() });
    }
    users_services.add_user(req.body.username,req.body.password,req.body.email,(log) =>{
        res.status(200).json(log);
    },(err)=>{
        res.status(400).json(err);
    })
});

router.post('/login',body("username").isLength({min:5,max:30}),body("password").isLength({min:5,max:30}),(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array() });
    }
    users_services.login_user(req.body.username,req.body.password,(log)=>{
        res.send(log)
    },(err)=>{
        res.send(err);
    })
});

module.exports = router;