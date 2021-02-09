//import User from '../models/user';
var user = null;
var isLoggedIn = false;

function init_user(){
    user = localStorage.getItem('user');
}

export default{
    user,
    isLoggedIn,
    init_user,
}