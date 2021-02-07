const connect = require('./connector');

connector = require('./connector');
// connect to db
var connection = connector.connect();

connection.connect(function (err){
    if(err) throw err;
    console.log('connected successfully');
});

// CREATE USER TABLE
connection.query('CREATE TABLE IF NOT EXISTS `market`.`Users` ( `id` INT NOT NULL AUTO_INCREMENT , `username` VARCHAR(30) NOT NULL , `password` VARCHAR(64) NOT NULL , `email` VARCHAR(60) NOT NULL , `api_token` VARCHAR(60) NULL , `is_admin` BOOLEAN NOT NULL , PRIMARY KEY (`id`));',
function(err,results,fields){
    if (err) throw err;
    console.log("Users Table Created Successfully");
});

//TODO::add others tables

connection.end();
