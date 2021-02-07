var ENV = require('../env.js');
var mysql = require('mysql');

var connect = function (){
    return connection = connection = mysql.createConnection({
        host : ENV.MYSQL_HOST,
        user : ENV.MYSQL_USER,
        password : ENV.MYSQL_PASS,
        database : ENV.MYSQL_DB
    });
}

module.exports = { connect };