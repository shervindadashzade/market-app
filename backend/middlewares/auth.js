var user_services = require('../services/users');

function auth(req,res,next){
  console.log(req);
  finded = false;
  console.log(req.body.api_token);
      if(req.body.api_token){
          for(user of user_services.users){
              if(user.api_token == req.body.api_token){
                req.user = user;
                finded = true;
                next();
              }
          }
          if(!finded){
            res.status(403).send({'message':'access denied'});
          }
      }else{
          res.status(403).send({'message':'access denied'});
      }
}

module.exports = auth