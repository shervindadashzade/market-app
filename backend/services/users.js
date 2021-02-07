const connector = require("../db/connector");
const UserModel = require("../models/user");
const {rndString,computeSHA256} = require('../helpers/helper');
// global users variable
const users = [];


// laod all users
var get_users = function(error,acceept){
    connection = connector.connect();
    connection.query("SELECT * FROM Users",function (err,results){
        while(users.length){
            users.pop();
        }
        if(err) throw err;
        for(user of results){
            users.push(new UserModel(user.id,user.username,user.email,user.is_admin));
        }
        console.log("Users Loaded Successfully");
        acceept();
    });
    connection.end();
}

// add a user
var add_user = function(username,password,email,accept,error){
    for(user of users){
        if(user.username == username){
                error({'message' : 'user exists'});
                return;
        }
        if(user.email == email){
                error({'message' : 'email exists'});
                return;
        }
    }
    connection = connector.connect();
    hashed_password = computeSHA256(password);
    var query = `INSERT INTO Users (username,password,email,is_admin) VALUES ('${username}','${hashed_password}','${email}',0)`;
    connection.query(query,function(err,result){
        if(err) throw err;
        console.log(`User ${username} Registered`);
        users.push(new UserModel(result.insertId,username,email,0));
        accept({'message' : 'user registered successfully'});
    })
    connection.end();
}

var remove_user = function(id,accept,error){
    connection = connector.connect();
    finded = get_user(id);
    if(finded){
        var query = `DELETE FROM Users WHERE id=${id}`;
        connection.query(query,function(err,result){
            if(err) throw err;
            accept({'message':'user removed successfully'})
        })
    }else{
        err({'message' : 'no user founded with this id'})
    }
    connection.end();
}

var login_user = function (username,password,accept,error){
    target = null;
    for(user of users){
        if(user.username == username){
            target = user;
            break;
        }
    }
    if(target){
        hashed_password = computeSHA256(password);
            connection = connector.connect()
            var api_token = rndString(60);
            target.api_token = api_token;
            var query = `UPDATE Users SET api_token='${api_token}' WHERE id=${target.id} AND password='${hashed_password}'`;
            connection.query(query,function(err,res){
                if(err) throw err;
                if(res.changedRows > 0){
                    accept({'api_token':api_token});
                }else{
                    error({'message' : 'wrong password'})
                }
                
            });
            connection.end();
    }else{
        error({'message' : 'user not founded'});
    }
}

var get_user = function(id){
    for(user of users){
        if(user.id == id)
            return user;
    }
    return null;
}
// for initializing
get_users(()=>{},()=>{});

module.exports = {users,get_users,get_user,add_user,remove_user,login_user};