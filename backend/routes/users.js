var express = require('express');
var router = express.Router();
var user_services = require('../services/users');
var auth_middleware = require('../middlewares/auth');
router.get('/',(req,res)=>{
    user_services.get_users(()=>{
        res.status(500).json({'error' : 'Internal error'})
    },()=>{
        res.status(200).json(user_services.users.map( user => { return {'id' : user.id,'username':user.username,'email' : user.email,'is_admin':user.is_admin} } ));
    })
})

router.get('/:id',(req,res) => {
    const user = user_services.get_user(req.params.id);
    if(user)
        return res.status(200).json({'id':user.id,'username':user.username,'email':user.email});
    else
        return res.status(400).json({'message' : 'no user founded with this id'});
})
router.delete('/:id',auth_middleware,(req,res)=>{
    if(req.params.id == req.user.id || req.user.is_admin){
        user_services.remove_user(req.params.id,(log)=>{
            res.status(200).json(log);
        },(log)=>{
            res.status(400).json(log)
        })
    }else{
        res.status(403).json({'message':'access denied'});
    }
})

module.exports = router;