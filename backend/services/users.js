const User = require("../models/user");
const crypto = require("crypto");
const { query } = require("express");
const { Console } = require("console");
const hash = crypto.createHash('sha256');

const connector = require("../db/connector");
const UserModel = require("../models/user");

const users = [];


// laod all users
var get_users = function(){
    connection = connector.connect();
    var a =connection.query("SELECT * FROM Users",function (err,results){
        while(users.length){
            users.pop();
        }
        if(err) throw err;
        for(user of results){
            users.push(new UserModel(user.id,user.username,user.email,user.api_token,user.is_admin));
        }
        console.log("Users Loaded Successfully");
        console.log(users);
    });
    console.log(a);
    connection.end();

}

// add a user
var add_user = function(username,password,email,succuess,err){
    for(user of users){
        if(user.username == username){
                err({'message' : 'user exists'});
                return;
        }
        if(user.email == email){
                err({'message' : 'email exists'});
                return;
        }
    }
    connection = connector.connect();
    hashed_password = hash.update(password).digest('hex');
    var query = `INSERT INTO Users (username,password,email,is_admin) VALUES ('${username}','${hashed_password}','${email}',0)`;
    connection.query(query,function(err,result){
        if(err) throw err;
        console.log(`User ${username} Added Successfully`);
        console.log(result);
        succuess();
    })
    connection.end();

}
// for initializing
get_users();

module.exports = {users,get_users,add_user};