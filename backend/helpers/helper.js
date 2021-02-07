const crypto = require("crypto");

function rndString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 function computeSHA256(str){
     const hash = crypto.createHash('sha256');
     hash.write(str);
     return hash.digest('hex');
 }


module.exports = {rndString,computeSHA256}